import { Component } from '@angular/core';
import { PickupPage } from '../pickup/pickup';
@Component({
    selector: 'tab-page',
    templateUrl: 'tab.html'
})

export class TabPage{
    pickUp: any = PickupPage;
    homeDelivery: any = PickupPage;
}