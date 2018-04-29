import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PickupPage } from '../pickup/pickup';
@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
  })
export class LandingPage{
    constructor(public navCtrl: NavController){}
    pickUp(){
        this.navCtrl.push(PickupPage);
    }
    homeDelivery(){
        
    }
}