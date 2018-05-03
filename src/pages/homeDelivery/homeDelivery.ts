import { Component } from '@angular/core';
import { NavController, ToastController, PopoverController } from 'ionic-angular';
import { MenuCategoryPage } from '../menuCategory/menuCategory';
import { CartPage } from '../cart/cart';
@Component({
    selector: 'home-delivery-page',
    templateUrl: 'homeDelivery.html'
})

export class HomeDeliveryPage{
    itemCount: any = 0;
    CartPage: any = CartPage;
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
    constructor(public toastCtrl: ToastController,public navCtrl: NavController, public popCtrl: PopoverController){}

    toast(){
        this.itemCount = this.itemCount + 1;
        let toast = this.toastCtrl.create({
            message: this.itemCount + ' Item(s) added to Cart',
            duration: 1000,
            position: 'top'
        });
        toast.present();
    }

    popUp(e){
        let popup = this.popCtrl.create(MenuCategoryPage);
        popup.present({
            ev: e
        });
    }
}