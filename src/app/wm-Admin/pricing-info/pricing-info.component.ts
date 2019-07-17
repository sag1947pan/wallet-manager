import { Component, OnInit, forwardRef } from '@angular/core';
import { SubscriptionDetails } from '../wm-bank-setup/pricingSubscriptionModel';
import { SubscriptionPackageDetails } from '../wm-bank-setup/subscriptionPackageModel';
import { PayAsYouGo } from '../wm-bank-setup/payaYouGoModel';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-pricing-info',
  templateUrl: './pricing-info.component.html',
  styleUrls: ['./pricing-info.component.css'],

  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PricingInfoComponent),
      multi: true
    }
  ]
})
export class PricingInfoComponent implements OnInit, ControlValueAccessor {
  pricingInfoGroup:FormGroup

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
    { package: 'Custom', noOfTransactions: 'min - max', chargesperMonth: '_________' },
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

  constructor() { }

  ngOnInit() {
  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.pricingInfoGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
   
    this.pricingInfoGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.pricingInfoGroup.disable() : this.pricingInfoGroup.enable();
  }


}
