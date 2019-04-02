import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clientreg2',
  templateUrl: './clientreg2.component.html',
  styleUrls: ['./clientreg2.component.css']
})
export class Clientreg2Component implements OnInit {
    clientRegisterForm2: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        private router: Router,) { }

    ngOnInit() {
        this.clientRegisterForm2 = this.formBuilder.group({
            companyName: ['', Validators.required],
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],
            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            companyRegNumber: [''],
            webSiteAddress: [''],
            addressLine2: [''],
            RegRoadNo: [''],
            RegaddressLine1: [''],
            RegaddressLine2: [''],
            RegtownCityName: [''],
            RegstateCountryName: [''],
            RegcountryName: [''],
            RegpostCode: [''],
            contactNumber: [''],
            yourDeskNumber: [''],
        });
    }
    get f() { return this.clientRegisterForm2.controls; }

}
