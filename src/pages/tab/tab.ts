import { Component, ViewChild } from '@angular/core';
import {NavParams, Tabs} from 'ionic-angular';
import { PickupPage } from '../pickup/pickup';
import { HomeDeliveryPage } from '../homeDelivery/homeDelivery';
@Component({
    selector: 'tab-page',
    templateUrl: 'tab.html'
})

export class TabPage{
    @ViewChild('tab') tabRef: Tabs;
    pageToShow: any;
    constructor(params: NavParams){
        this.pageToShow = params.get('page');
    }
    pickUp: any = PickupPage;
    homeDelivery: any = HomeDeliveryPage;
    ionViewDidEnter() {
        this.tabRef.select(this.pageToShow);
    }
}