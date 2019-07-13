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
  //Fixed Pricing  data
  private pricingSubscriptionInfo: SubscriptionDetails[] = [


    { subscriptionInfo: 'License Fees', currency: 'GBP', amount: 200000, validTime: 'One Time', discount: '' },
    { subscriptionInfo: 'AMC/Support Fees', currency: 'GBP', amount: 200000, validTime: 'Yearly', discount: '' },
    { subscriptionInfo: 'One Time Client Setup Charges', currency: 'GBP', amount: 10000, validTime: 'One Time', discount: '' },
  ]; 
  
  //Subsription Package Details
  private subscriptionPkgInfo: SubscriptionPackageDetails[] = [

    

    { package: 'Package 1', noOfTransactions: '0 - 10000', chargesperMonth: 'GBP 4000' },
    { package: 'Package 2', noOfTransactions: '10001 - 50000', chargesperMonth: 'GBP 15000' },
    { package: 'Package 3', noOfTransactions: '50001 - 100001', chargesperMonth: 'GBP 50000' },
    { package: 'Package 4', noOfTransactions: '200001+', chargesperMonth: 'GBP 100000' },
    { package: 'Custom', noOfTransactions: 'min - max', chargesperMonth: 'GBP ____' },
  ]; 

  //Pay As You Go Details

  private payasYouPkg: PayAsYouGo[] = [
   


    { noOfTransactions: '0 - 10000', chargesperTransaction: 'GBP 0.5', },
    { noOfTransactions: '10001 - 50000', chargesperTransaction: 'GBP 0.4', },
    { noOfTransactions: '50001 - 100001', chargesperTransaction: 'GBP 0.35', },
    { noOfTransactions: '200001 - 500000', chargesperTransaction: 'GBP 0.3', },
    { noOfTransactions: '500000 - 1000000', chargesperTransaction: 'GBP 0.25', },
    { noOfTransactions: '1000001+', chargesperTransaction: 'GBP 0.2', },
    
  ]; 
  




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


