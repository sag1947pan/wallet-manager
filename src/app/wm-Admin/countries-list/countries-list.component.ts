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
        { id: 1, name: 'India',cont:'Asia' },
        { id: 2, name: 'SriLanka',cont:'Asia' },
        { id: 3, name: 'Bangladesh',cont:'Asia' },
        { id: 4, name: 'Pakistan',cont:'Asia' },
        { id: 5, name: 'Nepal', cont: 'Asia' },
        { id: 6, name: 'Marshall Islands', cont: 'Australia' },
        { id: 7, name: 'Micronesia', cont: 'Australia' },
        { id: 8, name: 'Nauru', cont: 'Australia' },
        { id: 9, name: 'New Zealand	', cont: 'Australia' },
        { id: 10, name: 'SouthAfrica', cont: 'Africa' },
        { id: 11, name: 'Nigeria', cont: 'Africa' },
        { id: 12, name: 'Kenya	', cont: 'Africa' },
        { id: 13, name: 'Morocoo', cont: 'Africa' },
        { id: 14, name: 'Mexico', cont: 'NAmerica' },
        { id: 15, name: 'Canada', cont: 'NAmerica' },
        { id: 16, name: 'Unitied States', cont: 'NAmerica' },
        { id: 17, name: 'Cuba', cont: 'NAmerica' },
        { id: 18, name: 'Honduras', cont: 'NAmerica' }
    ];
    selectedAll: any;


    stateGroups: StateGroup[] = STATEGROUPS;
    stateGroupOptions: Observable<StateGroup[]>;

    //countries: any[] = this.stateGroupOptions.forEach()

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
