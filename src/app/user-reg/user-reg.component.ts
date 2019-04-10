import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent implements OnInit {
    userRegisterForm: FormGroup;
    userRegisterFormTab2: FormGroup;
    userRegisterFormTab3: FormGroup;
    submitted = false;
    submitted1 = false;
    submitted2 = false;
    Det1 = true;
    Det2 = false;
    Det3 = false;

    public commonReqMsg = AppConstantsComponent.commonreqMsg;


    constructor(private formBuilder: FormBuilder,
        private router: Router) { }

    ngOnInit() {
        this.userRegisterForm = this.formBuilder.group({
            Email: ['', Validators.required],
            Mobilenumber: [''],
            Password: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            Name: ['', Validators.required],
            Roadno: ['', Validators.required],
            addressLine1: ['', Validators.required],
            addressLine2: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            PostCode: ['', Validators.required],
            
        });
        this.userRegisterFormTab2 = this.formBuilder.group({
            Currency: ['', Validators.required],
            currency1: ['', Validators.required],
            CountryBank: ['', Validators.required],
            Fxrate: ['', Validators.required],
            Amount: ['', Validators.required],
            Bankname: ['', Validators.required],
            ClearingCode: ['', Validators.required],
            AccountNumber: ['', Validators.required],
        });
        this.userRegisterFormTab3 = this.formBuilder.group({
            CompanyName: ['', Validators.required],
            comRoadno: ['', Validators.required],
            comaddressLine1: ['', Validators.required],
            comaddressLine2: ['', Validators.required],
            comtownCityName: ['', Validators.required],
            comstateCountryName: ['', Validators.required],
            comcountryName: ['', Validators.required],
            comPostCode: ['', Validators.required],
            UniqueNumber: ['', Validators.required],
            OfficeEmail: ['', Validators.required],
            contactNumber: [''],
            AdditionalInputs: ['', Validators.required],
            UploadSupporting: ['', Validators.required],
            EnterOTP: ['', Validators.required],
            Customerid: ['', Validators.required],
        });
    }
    get f() { return this.userRegisterForm.controls; }
    get f2() { return this.userRegisterFormTab2.controls; }
    get f3() { return this.userRegisterFormTab3.controls; }


    tab1clk() {
        this.Det1 = true;
        this.Det2 = false;
        this.Det3 = false;
    }

    tab2clk() {
        this.Det1 = false;
        this.Det2 = true;
        this.Det3 = false;
    }

    tab3clk() {
        this.Det1 = false;
        this.Det2 = false;
        this.Det3 = true;
    }


    onSubmitTab1() {
        this.submitted = true;
        if (this.userRegisterForm.invalid) {
            return;
        }
        this.tab2clk();
        
    }
    onSubmitTab2() {
        debugger;
        this.submitted1 = true;
        if (this.userRegisterFormTab2.invalid) {
            return;
        }
        this.tab3clk();
    }
    onSubmitTab3() {
        this.submitted2 = true;
        if (this.userRegisterFormTab3.invalid) {
            return;
        }
        alert("Successfully Registered!")
        this.router.navigate(['/Login']);

    }
}
