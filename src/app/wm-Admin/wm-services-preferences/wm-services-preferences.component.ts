import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, FormGroup, FormControl, Validators } from '@angular/forms';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { MY_FORMATS } from '../bank-details/bank-details.component';
import { ValidationService } from 'src/app/validations/validation.service';

@Component({
  selector: 'app-wm-services-preferences',
  templateUrl: './wm-services-preferences.component.html',
  styleUrls: ['./wm-services-preferences.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmServicesPreferencesComponent),
      multi: true,
    },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class WmServicesPreferencesComponent implements OnInit, ControlValueAccessor {
  servicespreferencesGroup:FormGroup

  Options: string[] = ['Yes', 'No'];
  option = 'Yes';
  //Date Min and Max Validation.
  servciceActivationStartDate = new FormControl('date', [Validators.required]);
  serviceActivationEndDate =  new FormControl('date', [Validators.required]);

  // minDate is the start of today.
  minDate = new Date(new Date().setHours(0, 0, 0, 0));
  //minDate = new Date(2019, 0, 1);
  maxDate = new Date(2021, 0, 1);
  formBuilder: any;

  public bankInfoGroup: FormGroup = new FormGroup({
    servicesPreferences: new FormControl(""),
    // forexCurrencies: new FormControl(""),
    // countriesList: new FormControl(""),
    // invoiceData:new FormControl(""),
    // bankDetails:new FormControl(""),
    // pricingInfo:new FormControl(""),
    
  });


  constructor() { }

  ngOnInit() {

    this.servicespreferencesGroup = this.formBuilder.group({

      supportReqforBankUserMgmt: [''],

      supportReqforClientUserMgmt: [''],

      authManualPymtActivity: [''],

      authNonPymtActivity: [''],

    })
  }


  //Date Error Messages.
  getErrorMessage(pickerInput: string): string {
    if (!pickerInput || pickerInput === '' ) {
      return 'Please choose a date.';
    }
   // return this.isMyDateFormat(pickerInput);
   return ValidationService.isMyDateFormat(pickerInput);
  }


//ControlValueAccessor Implementation
public onTouched: () => void = () => { };

writeValue(val: any): void {
  val && this.servicespreferencesGroup.setValue(val, { emitEvent: false });
}

registerOnChange(fn: any): void {

  this.servicespreferencesGroup.valueChanges.subscribe(fn);
}

registerOnTouched(fn: any): void {

  this.onTouched = fn;
}

setDisabledState?(isDisabled: boolean): void {
  isDisabled ? this.servicespreferencesGroup.disable() : this.servicespreferencesGroup.enable();
}


}
