import {Component} from '@angular/core';
import { Platform, NavParams, ViewController } from 'ionic-angular';

@Component({
    selector: 'chat-page',
    templateUrl: 'chat.html'
})


export class ChatPage{
    constructor(public platform: Platform, public params: NavParams, public viewCtrl: ViewController) {

    }
    dismiss() {
        this.viewCtrl.dismiss(); 
    }
}