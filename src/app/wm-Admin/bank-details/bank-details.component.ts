import { Component, OnInit, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],

  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BankDetailsComponent),
      multi: true
    }
  ]
})
export class BankDetailsComponent implements OnInit, ControlValueAccessor {
  bankInfoGroup:FormGroup;
 // formBuilder: FormBuilder;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.bankInfoGroup = this.formBuilder.group({

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
       
  }

   //ControlValueAccessor Implementation
   public onTouched: () => void = () => {};

   writeValue(val: any): void {
     val && this.bankInfoGroup.setValue(val, { emitEvent: false });
   }
 
   registerOnChange(fn: any): void {
    
     this.bankInfoGroup.valueChanges.subscribe(fn);
   }
 
   registerOnTouched(fn: any): void {
     
     this.onTouched = fn;
   }
 
   setDisabledState?(isDisabled: boolean): void {
     isDisabled ? this.bankInfoGroup.disable() : this.bankInfoGroup.enable();
   }

}
