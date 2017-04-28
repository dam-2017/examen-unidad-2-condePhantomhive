import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Page3 } from '../page3/page3'
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html',
})
export class Page2 {
nombre:string;
  constructor(public navCtrl: NavController, public navParams: NavParams, storage:Storage) {
    storage.ready().then(()=>{
      storage.get('usuario').then((valor)=>{
          this.nombre=valor;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page2');
  }
  gotoPage3(){
    this.navCtrl.push(Page3)
  }
}
