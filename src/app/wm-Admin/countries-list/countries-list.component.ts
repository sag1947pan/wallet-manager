import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormControl, FormGroup, Validators, FormBuilder, FormArray, ValidatorFn } from '@angular/forms';


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
export class CountriesListComponent implements OnInit {
    form: FormGroup;
    countriesByContinent = [
        { id: 1, name: 'India' },
        { id: 2, name: 'SriLanka' },
        { id: 3, name: 'Bangladesh' },
        { id: 4, name: 'Pakistan' }
    ];
    selectedAll: any;
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
        this.form = this.formBuilder.group({
            countriesByContinent: new FormArray([])
        });

        this.addCheckboxes();
    }
    private addCheckboxes() {
        this.countriesByContinent.map((o, i) => {
            const control = new FormControl(i === 0); // if first item set to true, else false
            (this.form.controls.countriesByContinent as FormArray).push(control);
        });
    }

    submit() {
        debugger
        const selectedOrderIds = this.form.value.countriesByContinent
            .map((v, i) => v ? this.countriesByContinent[i].id : null)
            .filter(v => v !== null);
        console.log(selectedOrderIds);
    }
    selectAll() {
        for (var i = 0; i < this.form.value.countriesByContinent.length; i++) {
            this.form.value.countriesByContinent[i] = this.selectedAll;
        }
    }
    checkIfAllSelected() {
        this.selectedAll = this.form.value.countriesByContinent.every(function (item: any) {
            return item.selected == true;
        })
    }

  ngOnInit() {
  }



  //ControlValueAccessor Implementation
  //public onTouched: () => void = () => {};

  //writeValue(val: any): void {
  //  val && this.countriesListGroup.setValue(val, { emitEvent: false });
  //}

  //registerOnChange(fn: any): void {
  //  console.log("on change");
  //  this.countriesListGroup.valueChanges.subscribe(fn);
  //}

  //registerOnTouched(fn: any): void {
  //  console.log("on blur");
  //  this.onTouched = fn;
  //}

  //setDisabledState?(isDisabled: boolean): void {
  //  isDisabled ? this.countriesListGroup.disable() : this.countriesListGroup.enable();
  //}


}
