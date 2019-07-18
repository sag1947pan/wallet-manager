import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionDetails } from './pricingSubscriptionModel';
import { MatRadioChange, MatRadioButton } from '@angular/material';
import { DynamicGrid } from './superAdmin.model';
import { SubscriptionPackageDetails } from './subscriptionPackageModel';
import { PayAsYouGo } from './payaYouGoModel';

@Component({
  selector: 'app-wm-bank-setup',
  templateUrl: './wm-bank-setup.component.html',
  styleUrls: ['./wm-bank-setup.component.css']
})
export class WmBankSetupComponent implements OnInit {
  
  

  Roles: string[] = ['Admin', 'Operator', 'Authoriser'];

  submitted = false;
  Status: string;
  SuccessMessage: string;
  error: any;
  step = 0;
    
  
//Adding different forms under one main form
public bankSetupGroup: FormGroup = new FormGroup({
  bankSuperAdmin: new FormControl(""),
  forexCurrencies: new FormControl(""),
  countriesList: new FormControl(""),
  invoiceData:new FormControl(""),
  bankDetails:new FormControl(""),
  pricingInfo:new FormControl(""),
  
});

  

  constructor(private formBuilder: FormBuilder,
    private router: Router, ) {

  };

  ngOnInit() {
    
  }

  onSubmit() {
   // console.log(this.bankSetupGroup.value);
    console.log("stringfy.." + JSON.stringify(this.bankSetupGroup.value));
  }
  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  } 

};


