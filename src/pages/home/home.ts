import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
//import { ErrorHandler, NgModule } from '@angular/core';
//import {ActionSheetController } from 'ionic-angular';
//IMPORT FORMbUILDER
import { FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms'


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //DECLARE FORM gROUP 
  formgroup:FormGroup;
  //declare your controls
  firstname:AbstractControl;
  lastname:AbstractControl;
  email:AbstractControl;

  constructor(public navCtrl: NavController,public formBuilder:FormBuilder,public navParams:NavParams) {

  }

  onSubmit(){

    //make validaTIONS OF THE FORM
    this.formgroup = this.formBuilder.group({
      firstname:['',Validators.required],
      lastname:['',Validators.required],
      email:['',Validators.required]
    });

    this.firstname = this.formgroup.controls['firstname'];
    this.lastname = this.formgroup.controls['lastname'];
    this.email = this.formgroup.controls['email'];

  }

}
