import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabPage } from '../tab/tab';
@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
  })
export class LandingPage{
    page: any;
    constructor(public navCtrl: NavController){}
    
    tabView(page: any){
        this.navCtrl.push(TabPage);
        this.page = page;
    }
}