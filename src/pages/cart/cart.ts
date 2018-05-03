import { Component } from '@angular/core';

@Component({
    selector: 'cart-page',
    templateUrl: 'cart.html'
})

export class CartPage{
    constructor(){
        this.total();
    }
    totalAmt: number = 0;
    cartItems: any = [
        {
            title: 'Chicken Biriyani',
            quantity: '1',
            actualPrice: 180.00,
            totalPrice: 180.00
        },
        {
            title: 'Mutton Biriyani',
            quantity: '1',
            actualPrice: 250.00,
            totalPrice: 250.00
        }
    ]
    add(item){
        this.cartItems[item].quantity++;
        this.cartItems[item].totalPrice = this.cartItems[item].actualPrice * this.cartItems[item].quantity;
        this.total()
    }
    remove(item){
        if(this.cartItems[item].quantity > 0){
            this.cartItems[item].quantity--;
            this.cartItems[item].totalPrice = this.cartItems[item].actualPrice * this.cartItems[item].quantity;
            this.total();
        }
    }
    total(){
        this.totalAmt = 0;
        this.cartItems.forEach(element => {
            this.totalAmt = this.totalAmt + element.totalPrice 
        });
    }
}