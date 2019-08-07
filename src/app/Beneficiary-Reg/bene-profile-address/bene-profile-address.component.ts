import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-bene-profile-address',
  templateUrl: './bene-profile-address.component.html',
    styleUrls: ['./bene-profile-address.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => BeneProfileAddressComponent),
            multi: true
        }
      ]
})
export class BeneProfileAddressComponent implements OnInit {
    beneAddressGroup: FormGroup;

    constructor(private formBuilder: FormBuilder) { }

    ngOnInit() {
        this.beneAddressGroup = this.formBuilder.group({
            residence: ['', Validators.required],
            buildingNo: [''],
            streetAddress: ['', Validators.required],
            cityName: ['', Validators.required],
            countryName: [''],
            zipCode: ['', Validators.required],
        })
  }

}
