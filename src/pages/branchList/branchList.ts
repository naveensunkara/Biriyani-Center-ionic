import { Component } from '@angular/core';
import { NavParams, ModalController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
@Component({
    selector: 'branchList-page',
    templateUrl: 'branchList.html'
})

export class BranchList{ 
    constructor(params: NavParams, private modalCtrl: ModalController){
        this.branches = params.get('lists');
    }
    branches: any;
    showModal(){
        let modal = this.modalCtrl.create(ChatPage);
        modal.present();
      }
}