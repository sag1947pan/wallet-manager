import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BankSetupServices } from 'src/app/services/bankSetup.services';
import { first, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ValidationService } from 'src/app/validations/validation.service';
import { STATEGROUPS } from 'src/app/countries-List/country-data';
import { StateGroup } from 'src/app/countries-List/country';

//New code for countries List
// export interface StateGroup {
//   letter: string;
//   names: string[];
// }

export const _filter = (opt: string[], value: string): string[] => {
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
    }
  ]
})
export class BankDetailsComponent implements OnInit, ControlValueAccessor {
  bankInfoGroup: FormGroup;


  IsChecked: boolean;
  Options: string[] = ['Yes', 'No'];
  option = 'Yes';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;

  //State Groups.
  stateGroups: StateGroup[] = STATEGROUPS;
  stateGroupOptions: Observable<StateGroup[]>;
  // stateGroup = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private BankSetupServices: BankSetupServices, ) { }

  ngOnInit() {



    this.bankInfoGroup = this.formBuilder.group({

      //Bank Details
      // bankId: ['', Validators.compose([Validators.required, Validators.minLength(8)])],     
      bankId: ['', Validators.compose([Validators.required, ValidationService.bicCodeValidator])],
      bankName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactEmailId: ['', Validators.compose([Validators.required, ValidationService.emailValidator])],
      // primaryContactEmailId: ['', Validators.compose([Validators.required, emailValidator])],
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
    
    // this.stateGroupOptions = this.bankInfoGroup.get('regstateGroup')!.valueChanges
    //   .pipe(
    //     startWith(''),
    //     map(value => this._filterGroup(value))
    //   );
  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({ letter: group.letter, names: _filter(group.names, value) }))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
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

export function emailValidator(control: FormControl): { [key: string]: any } {
  var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
  if (control.value && !emailRegexp.test(control.value)) {
    return { invalidEmail: true };
  }
}
