import { Component } from '@angular/core';
import { NavController,AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators,FormControl } from '@angular/forms';
import { Page2 } from '../page2/page2';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  page2:Page2;
  err:string="";
  u:string="";
  p:string="";
  user:any={
    usr:'',
    pwd:''

  }
  myForm:FormGroup;
  constructor(public navCtrl: NavController,public fb:FormBuilder, public alert:AlertController, storage:Storage) {
    storage.ready().then(()=>{
      storage.get('usuario').then((valor)=>{
        storage.set('usuario','ceanperezgo');
      })
    })
    this.myForm=fb.group({
      'usuario':["",Validators.compose([Validators.required,Validators.pattern("/[a-z]/")])],
      'contra':["",Validators.compose([Validators.required,Validators.minLength(8)])]
    }
        
    );
    
  }
  validarUsuario(cadena:string){
    for(let i=0;i<cadena.length;i++){
      if(cadena.charCodeAt(i)>98 && cadena.charCodeAt(i)<122){
        return false;
      }
    }
    return true;
  }
  validatePassword(cadena:string):boolean{
      for(let i=0;i<cadena.length;i++){
        if('1234567890'.indexOf(cadena[i])!=-1){
          if('|@#%&'.indexOf(cadena[i])!=-1){
              return false;
          }
        }
      }
      return true;
  }

  gotoOtherPage(){
    this.err="";
    if(this.p=="13400475@ittepic" && this.u=="ceanperezgo"){
      this.navCtrl.push(Page2);
    }
/*if(!this.validarUsuario(this.u)){
      this.err+="El usuario debe tener solo minusculas\n";
    }*/
    if(!this.validatePassword(this.p)){
        this.err+="Verifique que la contraseña cumpla con las reglas"
    }
    console.log(this.err.length);
    if(this.err.length!=0){this.showAlert(this.err);}
    this.err="";
  }
  showAlert(cadena:string){
    let alert=this.alert.create({
      title:"ALERTA",
      subTitle:cadena,
      buttons:['Dismiss']
    });
    alert.present();
  }
}
