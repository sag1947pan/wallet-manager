import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-constants',
  templateUrl: './app-constants.component.html',
  styleUrls: ['./app-constants.component.css']
})
export class AppConstantsAPI implements OnInit {

    //List of APIs being used for customer
    public static customerRegister = "This Field is required";
    public static customerProfile = "Company Name is required";
    public static customerAddUser = "BuildingNo/Street(Or)Road Name/Number is required"; 
    public static customerGetUsers = "Address Line 1 is required";
    public static customerGetUser = "Town/City is required";
    public static customerAuthenticate = "State/Country is required"; //This is LOGIN
    public static customerDeleteUser = "Country is required";
    
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
