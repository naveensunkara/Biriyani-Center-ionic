import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import { ChatPage } from '../chat/chat';
import { BranchList } from '../branchList/branchList';
declare var google;

@Component({
  selector: 'pickup-page',
  templateUrl: 'pickup.html'
})
export class PickupPage {

  @ViewChild('map') mapElement: ElementRef;
  @ViewChild('place') search: ElementRef;
  map: any;
  latLng: any;
  userLocation: any;
  infowindow: any = [];
  markers: any = [];
  isKM: any = 10000;
  isType: any = "";

  constructor(public navCtrl: NavController, public geolocation: Geolocation, private ngZone: NgZone, public modalCtrl: ModalController) {

  }

  ionViewDidLoad() {
    this.loadMap();
  }

  onInput(event) {
  }

  onCancel(event) {
    return false;
  }
  loadMap() {
    //this.latLng = new google.maps.LatLng(13.082680199999999, 80.2707184);
    this.geolocation.getCurrentPosition().then((position) => {
      this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
      let mapOptions = {
        center: this.latLng,
        zoom: 13,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      let searchBox = new google.maps.places.SearchBox(this.search['_searchbarInput'].nativeElement);

      this.map.addListener('bounds_changed', function (e) {
        searchBox.setBounds(this.getBounds());
      });
      this.userLocation = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
      searchBox.addListener('places_changed', function () {
        
      });
      
      let infowindow = new google.maps.InfoWindow();
      infowindow.setContent("You are here");
      infowindow.open(this.map, this.userLocation);
      this.nearbyPlace();
    }, (err) => {
      console.log(err)
    })
  }

  nearbyPlace() {
    let service = new google.maps.places.PlacesService(this.map);
    service.nearbySearch({
      location: this.latLng,
      radius: this.isKM,
      types: ['restaurant'],
      name: ['AASIFE']
    }, (results, status) => {
      this.callback(results, status);
    });
  }

  callback(results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
      for (var i = 0; i < results.length; i++) {
        this.createMarker(results[i]);
      }
    }
  }

  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
    this.markers.push(marker);
    let infowindow = new google.maps.InfoWindow({
      content: '<h3>' + place.name + '</h3><p>Click to chat</p>'
    });
    this.infowindow.push(infowindow);
    google.maps.event.addListener(marker, 'click', () => {
      for (var j = 0; j < this.infowindow.length; j++) {
        this.infowindow[j].close();
      }
      this.ngZone.run(() => {
        infowindow.open(this.map, marker);
      });
      setTimeout(() => {
        this.showModal(place);
      }, 1000)
    });
  }

  clearMarkers() {
    this.markers.forEach(function (marker) {
      marker.setMap(null);
    });
    this.markers = [];
  }

  showModal(place) {
    let modal = this.modalCtrl.create(ChatPage, place);
    modal.present();
  }

  branchList() {
    let branchList = this.modalCtrl.create(BranchList, { lists: this.infowindow });
    branchList.present();
  }
}