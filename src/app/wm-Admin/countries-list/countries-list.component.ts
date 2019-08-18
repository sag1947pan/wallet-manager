import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';
import { STATEGROUPS } from 'src/app/countries-List/country-data';
import { StateGroup } from 'src/app/countries-List/country';
import { Observable } from 'rxjs'


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
    countriesByContinent: any[] = [
        { id: 1, name: 'India' },
        { id: 2, name: 'SriLanka' },
        { id: 3, name: 'Bangladesh' },
        { id: 4, name: 'Pakistan' },
        {id : 5, name :'Nepal'}
    ];
    selectedAll: any;


    stateGroups: StateGroup[] = STATEGROUPS;
    stateGroupOptions: Observable<StateGroup[]>;

  //public countriesListGroup: FormGroup = new FormGroup(
 //  {
    

  //    email: new FormControl("", [Validators.required]),
  //    firstName: new FormControl("",[Validators.required]),
  //    middleName: new FormControl("",[Validators.required]),
  //    lastName: new FormControl("",[Validators.required]),
  //    role: new FormControl("",[Validators.required])
  //});

  //countries = new FormControl();
  //countriesList: string[] = ['Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
  //  'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
  //  'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
  //  'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
  //  'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
  //  'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
  //  'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'];

    

    constructor(private formBuilder: FormBuilder) {
       
    }
    
    submit() {
        debugger
        const selectedOrderIds = this.countriesByContinent
            .filter(opt => opt.state)
            .map(opt => opt.name);
        
        console.log(selectedOrderIds);
    }
    
    checkAll(ev) {
        this.countriesByContinent.forEach(x => x.state = ev.checked)
    }

    isAllChecked() {
        return this.countriesByContinent.every(_ => _.state);
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
