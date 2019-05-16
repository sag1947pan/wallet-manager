import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-profile',
  templateUrl: './role-profile.component.html',
  styleUrls: ['./role-profile.component.css']
})
export class RoleProfileComponent implements OnInit {

    RoleGroup: FormGroup;

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

        this.RoleGroup = this.formBuilder.group({


           
            //Role Profile
            myRoleProfile: ['', Validators.required],
            mydesgCtrl: ['', Validators.required],

        });
  }

}
