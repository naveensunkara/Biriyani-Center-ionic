import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabPage } from '../tab/tab';
@Component({
    selector: 'page-landing',
    templateUrl: 'landing.html'
  })
export class LandingPage{
    constructor(public navCtrl: NavController){}
    
    tabView(page: any){
        this.navCtrl.push(TabPage,{'page': page});
    }
}