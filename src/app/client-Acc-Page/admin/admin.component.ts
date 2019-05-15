import { Component, OnInit } from '@angular/core';
//import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    CompInfoGroup: FormGroup;

    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];

    Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];

    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    PaymentTypes: string[] = ['Salary Payments', 'Vendor/ Supplier Payments', 'Rewards/prizes', 'Reimbursements'];
    Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
    Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
    CardTypes: string[] = ['Master Card', 'Visa', 'Amex'];

    constructor(private formBuilder: FormBuilder,
        private router: Router, ) { }

    ngOnInit() {

        this.CompInfoGroup = this.formBuilder.group({
            compnameCtrl: [''],
            tradingName: [''],
            compregnCtrl: ['', Validators.required],
            industryCtrl: [''],
            yourAccountID: [''],
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            addressLine2: [''],
            townCityName: ['', Validators.required],
            state: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],

            //Registered Address
            RegRoadNo: ['', Validators.required],
            RegaddressLine1: ['', Validators.required],
            RegaddressLine2: [''],
            RegtownCityName: ['', Validators.required],
            Regstate: ['', Validators.required],
            RegcountryName: ['', Validators.required],
            RegpostCode: ['', Validators.required],
        });
  }

}
