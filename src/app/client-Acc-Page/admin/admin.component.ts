import { Component, OnInit, Input } from '@angular/core';
//import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegCompInfo } from './companyInfo'; //
import { AdminUserData } from '../AdminData.model';
import { from } from 'rxjs';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  //CompInfoGroup: FormGroup;
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
 



  get f() { return this.CompInfoGroup.controls; }

  constructor(private formBuilder: FormBuilder,
    private router: Router, ) { }

  ngOnInit() {

    console.log("you entered Company Info Screen");

    this.GetStorageInfo();

    this.CompInfoGroup = this.formBuilder.group({
      compnameCtrl: [''],
      tradingName: [''],
      compregnCtrl: [''],
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

  GetStorageInfo() {

    //Get the values from Local storage and bind to UI where ever required

    //let myItem = sessionStorage.getItem("userName");
    //this.myRegCompInfo.compnameCtrl = myItem;

    // Read item:
    let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
    this.myRegCompInfo.compnameCtrl = item.company_name;
    this.myRegCompInfo.compregnCtrl = item.reg_num;
    this.myRegCompInfo.yourAccountID = item.cust_id;

  }

}
