import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    UserInfoGroup: FormGroup;

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

        this.UserInfoGroup = this.formBuilder.group({


            //Add user 
            userRole: ['',],
            desgCtrl: ['', Validators.required],
            myName: ['', Validators.required],
            myEmail: ['', Validators.required],
            myMobile: ['', Validators.required],
        });
  }

}
