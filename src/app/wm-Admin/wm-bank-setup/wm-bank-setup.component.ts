import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SubscriptionDetails } from './pricingSubscriptionModel';
import { MatRadioChange, MatRadioButton } from '@angular/material';
import { DynamicGrid } from './superAdmin.model';

@Component({
  selector: 'app-wm-bank-setup',
  templateUrl: './wm-bank-setup.component.html',
  styleUrls: ['./wm-bank-setup.component.css']
})
export class WmBankSetupComponent implements OnInit {
  compInfoGroup: FormGroup;
  invocingInfoGroup: FormGroup;
  bankSuperAdminGroup: FormGroup;
  // countriesListGroup:FormGroup;

  
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};


  //End

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
  step = 0;
  //Pricing Info data
  private pricingSubscriptionInfo: SubscriptionDetails[] = [


    { subscriptionInfo: 'License/Subscription Fees', currency: 'GBP', amount: 200000, validTime: 'Every 2 Years', discount: '' },
    { subscriptionInfo: 'AMC/Support Fees', currency: 'GBP', amount: 200000, validTime: 'Every 1 Year', discount: '' },
    { subscriptionInfo: 'One Time Client Setup Charges', currency: 'GBP', amount: 10000, validTime: 'One Time', discount: '' },
  ]; //Users Info to bind to UI 





  @Input() editable: boolean = false;
  @Output() change: EventEmitter<MatRadioChange>

  constructor(private formBuilder: FormBuilder,
    private router: Router, ) {


  };




  ngOnInit() {

      this.newDynamic = { email: "", firstName: "", middleName: "", lastName: "", role: "" };
      this.dynamicArray.push(this.newDynamic);


    this.compInfoGroup = this.formBuilder.group({

      bankId: [''],
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




      country: ['', Validators.required],
      postCode: ['', Validators.required],
      buildingName: ['', Validators.required],
      streetAddress: [''],
      state: ['', Validators.required],
      cityName: ['', Validators.required],

      //Registered Address



      regCountry: ['', Validators.required],
      regPostCode: ['', Validators.required],
      regbuildingName: ['', Validators.required],
      regstreetAddress: [''],

      regState: ['', Validators.required],
      regCityName: ['', Validators.required],

    });

    //Invoice Data
    this.invocingInfoGroup = this.formBuilder.group({
      invoicingFrequency: [''],
      invoiceGenerationDay: [''],
      paymentDues: [''],
      invoicefavouring: [''],
      mailInvoice: [''],
      invoiceAddress: [''],
    });

    //Bank Super Admin
    this.bankSuperAdminGroup = this.formBuilder.group({
      email: [''],
      firstName: [''],
      middleName: [''],
      lastName: [''],
      role: [''],


    })
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

  onChange(mrChange: MatRadioChange) {
    console.log(mrChange.value);
    let mrButton: MatRadioButton = mrChange.source;
    console.log(mrButton.name);
    console.log(mrButton.checked);
    console.log(mrButton.inputId);
  }



  addRow(index) {

    this.newDynamic = { email: "", firstName: "", middleName: "", lastName: "", role: "" };
    this.dynamicArray.push(this.newDynamic);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {

      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }


};


