import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { STATEGROUPS } from 'src/app/countries-List/country-data';
import { StateGroup } from 'src/app/countries-List/country';
import { Observable } from 'rxjs'
import {CountryLisyByContinent} from 'src/app/countries-List/country-data';
import {ContinentCountryGroup} from 'src/app/countries-List/country';


@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CountriesListComponent),
      multi: true
    }
  ]
  

})
export class CountriesListComponent implements OnInit, ControlValueAccessor{
    form: FormGroup;   

    countriesByContinent: any[] = CountryLisyByContinent;
    countryByContFilter: any[];
    selectedAll: any;


    stateGroups: StateGroup[] = STATEGROUPS;
    stateGroupOptions: Observable<StateGroup[]>; 

    

    constructor(private formBuilder: FormBuilder) {
       
    }
    
    submit() {
        debugger
        const selectedOrderIds = this.countryByContFilter
            .filter(opt => opt.state)
            .map(opt => opt.name);
        
        console.log(selectedOrderIds);
    }
    
    checkAll(ev) {
        this.countryByContFilter.forEach(x => x.state = ev.checked)
    }

    isAllChecked() {
        return this.countryByContFilter.every(_ => _.state);
    }

    getCountryList(conName) {
        debugger
        this.countryByContFilter = this.countriesByContinent.filter(x => x.cont == conName);
    }

  ngOnInit() {
  }



  //ControlValueAccessor Implementation
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
      //val && this.countriesByContinent.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
      //this.countriesByContinent.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    //isDisabled ? this.countriesListGroup.disable() : this.countriesListGroup.enable();
    }


}
