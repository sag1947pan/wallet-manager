import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-post-reg',   
  templateUrl: './post-reg.component.html',
    styleUrls: ['./post-reg.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PostRegComponent implements OnInit {
    CompInfoGroup: FormGroup;
    MyProfileGroup: FormGroup;
    CreditInfoGroup: FormGroup;
    UserInfoGroup: FormGroup;
    DashboardGroup: FormGroup;
    currencyFmtForBene = new FormControl();

    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];

    Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];

    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    PaymentTypes: string[] = ['Salary Payments', 'Vendor/ Supplier Payments', 'Rewards/prizes', 'Reimbursements'];
    Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
    Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
    CardTypes: string[] = ['Master Card', 'Visa', 'Amex'];

    constructor(private formBuilder: FormBuilder,
        private router: Router,) { }

    ngOnInit() {

        this.DashboardGroup = this.formBuilder.group({});

        this.CompInfoGroup = this.formBuilder.group({
            compnameCtrl: [''],
            tradingName:[''],
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

            //Add user 
            userRole: ['',],
            desgCtrl: ['', Validators.required],
            myName: ['', Validators.required],
            myEmail: ['', Validators.required],
            myMobile: ['', Validators.required],

            //Payment Profile
           
            avgmonthlyValue: ['', Validators.required],
            avgIntPayments: ['', Validators.required],
            avgValue: ['', Validators.required],
            paymentTypes: ['',],
            countriesList: ['',],
            currenciesList: ['',],

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

        this.MyProfileGroup = this.formBuilder.group({
            

            myName: ['', Validators.required],
            myEmail: ['', Validators.required],
            myMobile: ['', Validators.required],
            mywork: ['', Validators.required], 
            currPassword: ['', Validators.required],
            NewPasword: ['', Validators.required],
            confirmNewPwd: ['', Validators.required],
            confirmOTP: ['', Validators.required],

            //Role Profile
            myRoleProfile: ['', Validators.required], 
            mydesgCtrl: ['', Validators.required],

        });
        this.CreditInfoGroup = this.formBuilder.group({
            bankname: ['', Validators.required],
            clearingcode: ['', Validators.required],
            accountnumber: ['', Validators.required],

          //  cardtype: ['', Validators.required],
            //cardname: ['', Validators.required],
            //cardnumber: ['', Validators.required],
            //expirydate: ['', Validators.required],
            expiryyear: ['', Validators.required],
            //securitycode: ['', Validators.required],
            //firstname: ['', Validators.required],
            //lastname: ['', Validators.required],

        });
        this.UserInfoGroup = this.formBuilder.group({
            role: ['', Validators.required],
            emailId: ['', Validators.required],
            usertype: ['', Validators.required],
            yourmobileNumber: ['', Validators.required],
            yourdeskNumber: ['', Validators.required],
            password: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
        });
    }

    visible: boolean;

    show(event: boolean) {
        this.visible = event;
    }


     openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}


}
