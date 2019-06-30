import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
//import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegCompInfo } from './companyInfo'; //
import { AdminUserData } from '../../AdminData.model';
import { from } from 'rxjs';

import { CustUserDetails } from 'src/app/services/cust-user-details';
import { first } from 'rxjs/operators';
import { MatSnackBar, MatDialog  } from '@angular/material'
import { customerAddress } from './customerAddress'

import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.css'],
   // encapsulation: ViewEncapsulation.None
})
export class AdminComponent implements OnInit {
  //CompInfoGroup: FormGroup;
  submitted = false;
  Status: string;
  SuccessMessage: string;
  error: any;

  CompInfoGroup = new FormGroup({
    compnameCtrl: new FormControl(),
    compregnCtrl: new FormControl(),
    yourAccountID: new FormControl(),
  });

  private myRegCompInfo: RegCompInfo = new RegCompInfo();
  @Input() editable: boolean = false;

 

  Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];

  Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
 
  Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
  Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
  private customerAddress : customerAddress[] = []; //Users Info to bind to UI  



  get f() { return this.CompInfoGroup.controls; }

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private services : CustUserDetails,
    private snackBar: MatSnackBar ) { }

  ngOnInit() {

    console.log("you entered Company Info Screen");

    this.GetAddressDetails();

    this.CompInfoGroup = this.formBuilder.group({
      compName: [''],
      tradingName: [''],
      compRegnNo: [''],
      industry: [''],
      yourAccountID: [''],
      addressLine1: ['', Validators.required],
      addressLine2: [''],
      cityName: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      postCode: ['', Validators.required],

      //Registered Address
      regAddressLine1: ['', Validators.required],
      regAddressLine2: [''],
      regCity: ['', Validators.required],
      regState: ['', Validators.required],
      regCountry: ['', Validators.required],
      regPostCode: ['', Validators.required],

    });

  } //End of OnInit

  GetAddressDetails() {

    //Get the values from Local storage and bind to UI where ever required

    //let myItem = sessionStorage.getItem("userName");
    //this.myRegCompInfo.compnameCtrl = myItem;

    // Read item:
    let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
    this.myRegCompInfo.compnameCtrl = item.company_name;
    this.myRegCompInfo.compregnCtrl = item.reg_num;
    this.myRegCompInfo.yourAccountID = item.cust_id;

    this.services.GetCompanyAddressDetails()
           .subscribe((data )=> {
            console.log("data address.."+data);
            if(data != null){//} && (data.status == 200 || data.status == 201)){
                //data = JSON.stringify(data.body);
                data = JSON.parse(data);
                console.log("data add mapping.."+data);
                //this.customerAddress.= data.trading_add_line1;
              // this.CompInfoGroup.controls.regAddressLine1 =  data.register_add_line1;
              //this.CompInfoGroup.controls.regAddressLine2 = data.register_add_line2;
               //this.CompInfoGroup.controls.regCity = data.register_add_city;
               //this.CompInfoGroup.controls.regState = data.register_add_state;
               //this.CompInfoGroup.controls.regCountry = data.register_add_country;
               //this.CompInfoGroup.controls.regPostCode = data.register_add_post_code;

              // this.CompInfoGroup.controls.addressLine1 =  data.trading_add_line1;
               //this.CompInfoGroup.controls.regAddressLine2 = data.trading_add_line2;
               //this.CompInfoGroup.controls.cityName = data.trading_add_city;
               //this.CompInfoGroup.controls.state = data.trading_add_state;
               //this.CompInfoGroup.controls.country = data.trading_add_country;
               //this.CompInfoGroup.controls.postCode = data.trading_add_post_code;

               //Also need implement validation..check whether null or empty and fill the values..
               this.CompInfoGroup.patchValue({
                regAddressLine1: data.register_add_line1,
                regAddressLine2: data.register_add_line2,
                regCity : data.register_add_city,
                regState : data.register_add_state,
                regCountry : data.register_add_country,
                regPostCode : data.register_add_post_code,
                addressLine1 :  data.trading_add_line1,
                addressLine2 : data.trading_add_line2,
                cityName : data.trading_add_city,
                state : data.trading_add_state,
                country : data.trading_add_country,
                postCode : data.trading_add_post_code
               });

               //this.customerAddress = JSON.parse(data).users;
            }else{
                // status meggae with no user records.. but this should not be the case
            }
           }, error => (this.error = error));

  }

  onSubmit() {

    debugger;
    this.submitted = true;
    if (this.CompInfoGroup.invalid) {
        return;
    }
    else {
      console.log("add address data.."+JSON.stringify(this.CompInfoGroup.value));
        this.services.updateAddressDetails(JSON.stringify(this.CompInfoGroup.value))
            .pipe(first())
            .subscribe(data => {
                this.Status = data.status;
                console.log("add user data.."+JSON.stringify(data.body));
                console.log("add user data.status."+this.Status);
                if(data != null && data.status == 201){
                    data = JSON.stringify(data.body);                        
                    data = JSON.parse(data);
                    this.SuccessMessage = data.Message;
                }else{
                    data = JSON.stringify(data.body);
                    data = JSON.parse(data);
                    this.SuccessMessage = data.Message;
                }
                this.snackBar.open(this.SuccessMessage , 'Done', {
                        duration: 3000,
                    });
            }, error => (this.error = error));
    }
}

}
