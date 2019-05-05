import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
    selector: 'app-post-reg', //
    //selector: 'app-navigation',
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

    constructor(private formBuilder: FormBuilder,
        private router: Router,) { }

    ngOnInit() {

        this.DashboardGroup = this.formBuilder.group({});

        this.CompInfoGroup = this.formBuilder.group({
            compnameCtrl: [''],
            compregnCtrl: ['', Validators.required],
            industryCtrl: [''],
            tradingAddrCtrl: [''],
            registerdAddrCtrl: [''],
            adminuserCtrl: [''],
            operuserCtrl: [''],
            authuserCtrl: [''],
            avgmonthlyValue: [''],
            avgIntPayments: ['', Validators.required],
            avgValue: ['', Validators.required],           

        });

        this.MyProfileGroup = this.formBuilder.group({
            //currencyFmtForBene: ['', Validators.required],
            //reminderemail: ['', Validators.required],
            //remindersms: ['', Validators.required],
            //fileauthorization: ['', Validators.required],
            //margins: ['', Validators.required],
            //FxTiers: [''],
            //teamemail: ['', Validators.required],
            //method: ['', Validators.required],
            //debitprofile: ['', Validators.required],
            //countrybank: ['', Validators.required],

            myName: ['', Validators.required],
            myEmail: ['', Validators.required],
            myMobile: ['', Validators.required],
            mywork: ['', Validators.required],

        });
        this.CreditInfoGroup = this.formBuilder.group({
            bankname: ['', Validators.required],
            clearingcode: ['', Validators.required],
            accountnumber: ['', Validators.required],
            cardtype: ['', Validators.required],
            cardname: ['', Validators.required],
            cardnumber: ['', Validators.required],
            expirydate: ['', Validators.required],
            expiryyear: ['', Validators.required],
            securitycode: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],

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
