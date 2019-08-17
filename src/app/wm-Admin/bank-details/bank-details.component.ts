import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BankSetupServices } from 'src/app/services/bankSetup.services';
import { first, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidationService } from 'src/app/validations/validation.service';
import { STATEGROUPS } from 'src/app/countries-List/country-data';
import { StateGroup } from 'src/app/countries-List/country';
//For Custom Date Picker
import {MomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment';



export const MY_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'DD/MM/YYYY',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};


export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};

//For Regfilter

export const _regfilter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};


@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BankDetailsComponent),
      multi: true,
    },
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},

    {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})


export class BankDetailsComponent implements OnInit, ControlValueAccessor {
  bankInfoGroup: FormGroup;


  IsChecked: boolean;
  Options: string[] = ['Yes', 'No'];
  option = 'Yes';

  
  //State Groups.
  stateGroups: StateGroup[] = STATEGROUPS;
  stateGroupOptions: Observable<StateGroup[]>;

  regstateGroups: StateGroup[] = STATEGROUPS;
  regstateGroupOptions: Observable<StateGroup[]>;
  

  //Date Min and Max Validation.
  servciceActivationStartDate = new FormControl('date', [Validators.required]);
  serviceActivationEndDate =  new FormControl('date', [Validators.required]);

  // minDate is the start of today.
  minDate = new Date(new Date().setHours(0, 0, 0, 0));
  //minDate = new Date(2019, 0, 1);
  maxDate = new Date(2021, 0, 1);

  constructor(
    private formBuilder: FormBuilder,
    private BankSetupServices: BankSetupServices, ) { }

  ngOnInit() {

    this.bankInfoGroup = this.formBuilder.group({

      //Bank Details
         
      bankId: ['', Validators.compose([Validators.required, ValidationService.bicCodeValidator])],
      bankName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactEmailId: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],      
      primaryContactPhoneNo: ['', Validators.compose([Validators.required, Validators.minLength(11)])],

      //Services and Preferences
      bankServiceSubscription: [''],

     // servciceActivationStartDate: ['date', Validators.required],

     // serviceActivationEndDate: [''],

      supportReqforBankUserMgmt: [''],

      supportReqforClientUserMgmt: [''],

      authManualPymtActivity: [''],

      authNonPymtActivity: [''],


      addressLine1: [''],
      addressLine2: [''],
      cityName: ['',],
      state: ['',],
      //country: ['',],
      stateGroup: ['',],

      postCode: ['',],

      //Registered Address
      regAddressLine1: ['',],
      regAddressLine2: [''],
      regCity: ['',],
      regState: ['',],
      //regCountry: ['',],
      regstateGroup: ['',],
      regPostCode: ['',],

    });

    this.stateGroupOptions = this.bankInfoGroup.get('stateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._filterGroup(value))
      );
    
    this.regstateGroupOptions = this.bankInfoGroup.get('regstateGroup')!.valueChanges
      .pipe(
        startWith(''),
        map(value => this._regfilterGroup(value))
      );
  }


  // Filter for Countries List.
  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }


  //For Reg Filter Group
  private _regfilterGroup(value: string): StateGroup[] {
    if (value) {
      return this.regstateGroups
        .map(group => ({ letter: group.letter, names: _regfilter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.regstateGroups;
  }


  //Date Error Messages.
  getErrorMessage(pickerInput: string): string {
    if (!pickerInput || pickerInput === '' ) {
      return 'Please choose a date.';
    }
   // return this.isMyDateFormat(pickerInput);
   return ValidationService.isMyDateFormat(pickerInput);
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
          regPostCode: this.bankInfoGroup.value.postCode,
          // regCountry: this.bankInfoGroup.value.stateGroup.trim(),
          regstateGroup: this.bankInfoGroup.value.stateGroup.trim(),


        })


    }
    else {
      this.bankInfoGroup.patchValue({
        regAddressLine1: '',
        regAddressLine2: '',
        regCity: '',
        regState: '',
        // regCountry: '',
        regstateGroup: '',
        regPostCode: '',

      })

    }


    console.log(this.bankInfoGroup.value);

  }

  onSubmit() {

    console.log("payload.." + this.bankInfoGroup.value);
    //verify the fields existance and submit the request...
    this.BankSetupServices.setBankMasterInfo(this.bankInfoGroup.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log("redirectd to success page" + data);
        },
        error => {
          console.log("redirectd to wmuser failure page" + error);
        });
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


