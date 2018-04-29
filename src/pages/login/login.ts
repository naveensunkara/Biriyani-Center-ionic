import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LandingPage } from '../landing/landing';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    entryComponents:[ LandingPage ]
  })
export class LoginPage{
    constructor(public navCtrl: NavController){}
    login(){
        console.log(32432)
        this.navCtrl.push(LandingPage);
    }
}