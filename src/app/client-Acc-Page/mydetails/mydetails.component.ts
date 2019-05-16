import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mydetails',
  templateUrl: './mydetails.component.html',
  styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

    mydetailsGroup: FormGroup;

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

        this.mydetailsGroup = this.formBuilder.group({


            myName: ['', Validators.required],
            myEmail: ['', Validators.required],
            myMobile: ['', Validators.required],
            mywork: ['', Validators.required],

            //currPassword: ['', Validators.required],
            //NewPasword: ['', Validators.required],
            //confirmNewPwd: ['', Validators.required],
            //confirmOTP: ['', Validators.required],

            ////Role Profile
            //myRoleProfile: ['', Validators.required],
            //mydesgCtrl: ['', Validators.required],

        });
  }

}
