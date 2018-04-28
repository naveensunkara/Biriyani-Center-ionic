import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
  })
export class LoginPage{
    constructor(private viewCtrl: ViewController){}
    login(){
        this.viewCtrl.dismiss();
        window.location.href = '';
    }
}