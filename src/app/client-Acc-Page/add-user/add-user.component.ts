import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material'

// Users details Info
export interface PeriodicElement {
    position: number;
    userId: string;
    role: string;
   
    status: string;
   
}

const ELEMENT_DATA: PeriodicElement[] = [
    { position: 1, userId: 'veeratest1@test.com', role: 'Admin', status: 'Active' },
    { position: 2, userId: 'veeratest2@test.com', role: 'Operations', status: 'Active' },
    // { position: 3, userId: 'veeratest3@test.com', role: 'Authorizer', status: 'Active' },
    // { position: 4, userId: 'kartheek2@test.com', role: 'Operations', status: 'InActive' },
    // { position: 5, userId: 'ranjith@test.com', role: 'Authorizer', status: 'InActive' },
    // { position: 6, userId: 'ranjith9@test.com', role: 'Operations', status: 'InActive' },   
];





@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
    UserInfoGroup: FormGroup;
    submitted = false;

    error: any;
    Status: string;
    CustomerCode; string;
    SuccessMessage: string;

    displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
    dataSource = ELEMENT_DATA;


    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];
    Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];
    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    PaymentTypes: string[] = ['Salary Payments', 'Vendor/ Supplier Payments', 'Rewards/prizes', 'Reimbursements'];
    Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
    Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
    CardTypes: string[] = ['Master Card', 'Visa', 'Amex'];


    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private WalletService: WalletService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {

        //this.WalletService.GetUsersSummary()
        //    .pipe(first())
        //    .subscribe(data => {
        //        console.log("data from data" + data);
        //        let resBody = {};
        //        data = JSON.parse(data);
        //        console.log("data from resBody" + data);
               
               
        //    }, error => (this.error = error));

        this.UserInfoGroup = this.formBuilder.group({

            //Add user 
            userId: ['', Validators.required],
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: [''],
            role: ['',],
            mobileNum: ['', Validators.required],
           // desgCtrl: ['', Validators.required],         
           
        });


       
    }

    get f() { return this.UserInfoGroup.controls; }

    onSubmit() {

        debugger;
        this.submitted = true;
        if (this.UserInfoGroup.invalid) {
            return;
        }
        else {
            this.WalletService.AddUser(JSON.stringify(this.UserInfoGroup.value))
                .pipe(first())
                .subscribe(data => {
                    this.Status = data.Status;
                   // this.CustomerCode = data.CustomerCode;
                    this.SuccessMessage = data.SuccessMessage;                  
                 
                    this.snackBar.open('User details added successfully' , 'Done', {
                            duration: 3000,
                        });
                }, error => (this.error = error));
        }
    }

    //GET API for Users Summary

}
