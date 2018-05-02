import { Component } from '@angular/core';

@Component({
    selector: 'home-delivery-page',
    templateUrl: 'homeDelivery.html'
})

export class HomeDeliveryPage{
    menu: any = [
        {
            name: 'Hyderabad Biryani',
            price: '125.00',
            deliver: 'Deliver to your door within Half an hour'
        },
        {
            name: 'Mughal Biriyani',
            price: '180.00',
            deliver: 'Deliver to your door within Half an hour'
        },
        {
            name: 'Afghan Chicken',
            price: '250.00',
            deliver: 'Deliver to your door within Half an hour'
        },
        {
            name: 'Plain Biryani',
            price: '100.00',
            deliver: 'Deliver to your door within Half an hour'
        },
        {
            name: 'Afghan Chicken',
            price: '250.00',
            deliver: 'Deliver to your door within Half an hour'
        },
        {
            name: 'Plain Biryani',
            price: '100.00',
            deliver: 'Deliver to your door within Half an hour'
        }
    ]
}