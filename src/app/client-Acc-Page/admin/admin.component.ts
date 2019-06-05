import { Component, OnInit } from '@angular/core';
//import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegCompInfo } from './companyInfo'; //
import {AdminUserData} from '../AdminData.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
    //CompInfoGroup: FormGroup;
    CompInfoGroup = new FormGroup({
      compnameCtrl: new FormControl()
   });

   private myRegCompInfo: RegCompInfo = new RegCompInfo();

    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];

    Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];

    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    PaymentTypes: string[] = ['Salary Payments', 'Vendor/ Supplier Payments', 'Rewards/prizes', 'Reimbursements'];
    Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
    Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
    CardTypes: string[] = ['Master Card', 'Visa', 'Amex'];

   

    get f() { return this.CompInfoGroup.controls; }

    constructor(private formBuilder: FormBuilder,
        private router: Router, ) { }

    ngOnInit() {

       console.log("you entered Company Info Screen");

         this.GetStorageInfo();

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
                
  } //End of OnInit

  GetStorageInfo()
  {

    console.log("Entered GetStorageInfo method");
    //Get the values from Local storage and bind to UI where ever required

   let myItem = sessionStorage.getItem("userName");
   console.log(myItem);

   this.myRegCompInfo.compnameCtrl = myItem;

   // Read item:
let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData ;


//console.log("user data parsed response is" + item);
   
  

  }

  

  


}
