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
  map: any;
  latLng: any;
  marker: any;
  mapOptions: any;
  infowindow: any = [];

  isKM: any = 10000;
  isType: any = "";

  constructor(public navCtrl: NavController, public geolocation: Geolocation, private ngZone: NgZone, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {
    this.latLng = new google.maps.LatLng(13.082680199999999, 80.2707184);
    this.mapOptions = {
      center: this.latLng,
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    this.marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: this.map.getCenter()
    });
    let infowindow = new google.maps.InfoWindow();
    infowindow.setContent("You are here");
    infowindow.open(this.map, this.marker);

    this.nearbyPlace();
    // this.geolocation.getCurrentPosition().then((position) => {
    //   this.latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    //   this.mapOptions = {
    //     center: this.latLng,
    //     zoom: 13,
    //     mapTypeId: google.maps.MapTypeId.ROADMAP
    //   }
    //   this.map = new google.maps.Map(this.mapElement.nativeElement, this.mapOptions);
    // }, (err) => {
    //   console.log(err)
    // })
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

    let infowindow = new google.maps.InfoWindow({
      content: '<h3>' + place.name + '</h3><p>Click to chat</p>'
    });
    this.infowindow.push(infowindow);
    console.log(infowindow);
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

  showModal(place) {
    let modal = this.modalCtrl.create(ChatPage, place);
    modal.present();
  }

  branchList() {
    let branchList = this.modalCtrl.create(BranchList, { lists: this.infowindow });
    branchList.present();
  }
}