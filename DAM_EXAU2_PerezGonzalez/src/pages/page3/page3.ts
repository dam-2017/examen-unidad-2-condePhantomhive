import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-page3',
  templateUrl: 'page3.html',
})
export class Page3 {
  usuario:string;
  nombre:string;
  materno:string;
  paterno:string;
  fecha:string;
  rfc:string;
  myForm:FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, storage:Storage,fb:FormBuilder) {
    this.myForm=fb.group({
      'name':["",Validators.required],
      'mat':["",Validators.required],
      'pat':["",Validators.required],
    }
        
    );
    storage.ready().then(()=>{
      storage.get('usuario').then((valor)=>{
          this.usuario=valor;
      })
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Page3');
  }

}
