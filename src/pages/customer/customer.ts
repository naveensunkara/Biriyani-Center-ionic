import { Component } from '@angular/core';

@Component({
    selector: 'customer-page',
    templateUrl: 'customer.html'
})

export class CustomerPage{
    addresses: any =[
        {
            title: 'Home',
            street: '#34/45, Ambedkar Street,',
            area: 'VOC Nagar',
            city: 'Chennai',
            selected: true
        },
        {
            title: 'Office',
            street: '#34/45, Kannagi Street,',
            area: 'KK Nagar',
            city: 'Chennai',
            selected: false
        }
    ]
}