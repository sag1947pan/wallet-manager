import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-constants',
  templateUrl: './app-constants.component.html',
  styleUrls: ['./app-constants.component.css']
})
export class AppConstantsComponent implements OnInit {

    public static companyNameMsg = "Company Name is required";
    public static BuildingMsg = "BuildingNo/Street(Or)Road Name/Number is required"; 
    public static AddressLineMsg = "Address Line 1 is required";
    public static TownMsg = "Town/City is required";
    public static StateMsg = "State/Country is required";
    public static CountryMsg = "Country is required";
    public static PostCodeMsg = "PostCode is required";
    public static FullNameMsg = "Full Name is required";
    public static RoleMsg = "Role is required";
    public static EmailReqMsg = "Email is required";
    public static EmailValidMsg = "Email must be a valid email address";
    public static ContactNumMsg = "Mobile Number is required";
    public static SecurityQuesMsg = "Secuirty Question is reuired";
    public static SecuirtyAnsMsg = "Secuirty Answer is reuired";

  constructor() { }

  ngOnInit() {
  }

}
