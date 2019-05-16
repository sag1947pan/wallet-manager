import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css']
})
export class BankDetailsComponent implements OnInit {

    BankInfoGroup: FormGroup;

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

        this.BankInfoGroup = this.formBuilder.group({
            //Bank details
            BankCountry: ['',],
            bankName: ['', Validators.required],
            clearingCodeorBic: ['', Validators.required],
            bankAccNo: ['', Validators.required],

            //Credit Card Details (needs to be added here)
            cardname: ['', Validators.required],
            cardnumber: ['', Validators.required],
            expirydate: ['', Validators.required],
            securitycode: ['', Validators.required],
            cardtype: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
        });
  }

}
