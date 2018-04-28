import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }
  ngOnInit(){
    let modal = this.modalCtrl.create(LoginPage);    
    setTimeout(() => {
      modal.present();
    }, 1000)
  }

}
