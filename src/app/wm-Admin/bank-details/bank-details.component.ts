import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
//import { stringify } from '@angular/core/src/render3/util';
//import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => BankDetailsComponent),
      multi: true,     
    }   
  ]
})
export class BankDetailsComponent implements OnInit, ControlValueAccessor {
  bankInfoGroup: FormGroup;
  // formBuilder: FormBuilder;


  IsChecked: boolean;

  Options: string[] = ['Yes', 'No'];
  option = 'Yes';

  //countri = new FormControl();
  countriesList: string[] = ['Australia', 'India', 'UK', 'USA', 'Singapore'];

  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit() {

    this.bankInfoGroup = this.formBuilder.group({

      //Bank Details
      bankId: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
     // bankCustomerId: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
      bankName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactEmailId: ['', Validators.compose([Validators.required, Validators.email])],
      primaryContactPhoneNo: ['', Validators.compose([Validators.required, Validators.minLength(11)])],

      //Services and Preferences
      bankServiceSubscription: [''],

      servciceActivationStartDate: [''],

      serviceActivationEndDate: [''],

      supportReqforBankUserMgmt: [''],

      supportReqforClientUserMgmt: [''],

      authManualPymtActivity: [''],

      authNonPymtActivity: [''],




      
      addressLine1: [''],
      addressLine2: [''],
      cityName: ['',],
      state: ['',],
      country: ['',],
      postCode: ['',],

      //Registered Address
      regAddressLine1: ['',],
      regAddressLine2: [''],
      regCity: ['',],
      regState: ['',],
      regCountry: ['',],
      regPostCode: ['',],
      //chkboxAddress: ['',],
    });

  }


  showOptions(event) {
    console.log(event);

    if (event.checked) {

      this.bankInfoGroup.patchValue(
        {
          regAddressLine1: this.bankInfoGroup.value.addressLine1,
          regAddressLine2: this.bankInfoGroup.value.addressLine2,
          regCity: this.bankInfoGroup.value.cityName,
          regState: this.bankInfoGroup.value.state,
          regpostCode: this.bankInfoGroup.value.postCode,
          regcountry: this.bankInfoGroup.value.country,


        })


    }
    else {
      this.bankInfoGroup.reset({
        regAddressLine1: '',
        regAddressLine2: '',
        regCity: '',
        regState: '',
        regCountry: '',
        regpostCode: '',

      })

    }


    console.log(this.bankInfoGroup.value);

  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => { };

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
