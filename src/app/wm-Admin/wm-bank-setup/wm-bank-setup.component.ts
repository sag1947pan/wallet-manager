import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {SubscriptionDetails} from './pricingSubscriptionModel'  ;
import { MatRadioChange, MatRadioButton } from '@angular/material';

@Component({
  selector: 'app-wm-bank-setup',
  templateUrl: './wm-bank-setup.component.html',
  styleUrls: ['./wm-bank-setup.component.css']
})
export class WmBankSetupComponent implements OnInit {

  invocingInfoGroup:FormGroup;
  bankSuperAdminGroup:FormGroup;
 // countriesListGroup:FormGroup;

  toppings = new FormControl();
  toppingList: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

  Roles: string[] = ['Admin', 'Operator', 'Authoriser'];

  submitted = false;
  Status: string;
  SuccessMessage: string;
  error: any;
  //Pricing Info data
  private pricingSubscriptionInfo : SubscriptionDetails[] = [

   
    {subscriptionInfo: 'License/Subscription Fees', currency: 'GBP', amount: 200000, validTime: 'Every 2 Years', discount:''},
    {subscriptionInfo: 'AMC/Support Fees', currency: 'GBP', amount: 200000, validTime: 'Every 1 Year', discount:''},
    {subscriptionInfo: 'One Time Client Setup Charges', currency: 'GBP', amount: 10000, validTime: 'One Time', discount:''},
  ]; //Users Info to bind to UI 

  CompInfoGroup = new FormGroup({
    compnameCtrl: new FormControl(),
    compregnCtrl: new FormControl(),
    yourAccountID: new FormControl(),
  });
  
 

  
  @Input() editable: boolean = false;
  @Output() change: EventEmitter<MatRadioChange>

  constructor(private formBuilder: FormBuilder,
    private router: Router,) { }

  ngOnInit() {

    this.CompInfoGroup = this.formBuilder.group({

      customerId: [''], 
      bankCustomerId: [''],
      bankName: [''],
      primaryContactName: [''],
      primaryContactEmailId: [''],
      primaryContactPhoneNo: [''],

      //Address
      compName: [''],
      tradingName: [''],
      compRegnNo: [''],
      industry: [''],
      yourAccountID: [''],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      cityName: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postCode: ['', Validators.required],

      //Registered Address
      regAddressLine1: ['', Validators.required],
      regAddressLine2: [''],
      regCity: ['', Validators.required],
      regState: ['', Validators.required],
      regCountry: ['', Validators.required],
      regPostCode: ['', Validators.required],

    });

    //Invoice Data
    this.invocingInfoGroup = this.formBuilder.group({
      invoicingFrequency: [''],
      invoiceGenerationDay: [''],
      paymentDues:[''],
      invoicefavouring:[''],
      mailInvoice:[''],
      invoiceAddress:[''],
    });

    //Bank Super Admin
    this.bankSuperAdminGroup = this.formBuilder.group({
      email:[''],
      firstName:[''],
      lastName:[''],
      role:[''],
    })
  }

  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
    let mrButton: MatRadioButton = mrChange.source;
    console.log(mrButton.name);
    console.log(mrButton.checked);
    console.log(mrButton.inputId);
 } 

  

  
};


