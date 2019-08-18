import { Component, OnInit, forwardRef } from '@angular/core';
import { FormGroup, ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Observable } from 'rxjs';
import { StateGroup } from 'src/app/countries-List/country';
import { STATEGROUPS } from 'src/app/countries-List/country-data';
import { startWith, map } from 'rxjs/operators';


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
  selector: 'app-wm-address-details',
  templateUrl: './wm-address-details.component.html',
  styleUrls: ['./wm-address-details.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WmAddressDetailsComponent),
      multi: true,
    },
    
  ]
})
export class WmAddressDetailsComponent implements OnInit, ControlValueAccessor  {
  addressGroup: FormGroup;
  formBuilder: any;
  IsChecked: boolean;

   //State Groups.
   stateGroups: StateGroup[] = STATEGROUPS;
   stateGroupOptions: Observable<StateGroup[]>;
 
   regstateGroups: StateGroup[] = STATEGROUPS;
   regstateGroupOptions: Observable<StateGroup[]>;

   public bankInfoGroup: FormGroup = new FormGroup({
    wmAddress: new FormControl(""),
    
  });
   

  constructor() { }

  ngOnInit() {

    this.addressGroup = this.formBuilder.group({

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
    })

    this.stateGroupOptions = this.addressGroup.get('stateGroup')!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );
  
  this.regstateGroupOptions = this.addressGroup.get('regstateGroup')!.valueChanges
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



  //ControlValueAccessor Implementation
  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.addressGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {

    this.addressGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.addressGroup.disable() : this.addressGroup.enable();
  }

}
