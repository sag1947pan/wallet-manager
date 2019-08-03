import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WmUserServices } from 'src/app/services/wmuser.services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';
import { ErrorMessages } from 'src/app/resources/error.messages';
import { SessionUserData } from 'src/app/model/sessionData.model';
import { from } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './customersearch.component.html',
    //styleUrls: ['./search.component.css']
})
export class CustomerSearchComponent implements OnInit {
    SearchGroup: FormGroup;
    submitted = false;
    Status: string;
    errorMessage: string;
    resourcesLoaded: boolean;
    userRole:string;


    constructor(
        private formBuilder: FormBuilder,
        private wmUserServices: WmUserServices,
        private router: Router, ) { }

    ngOnInit() {
        this.SearchGroup = this.formBuilder.group({
            custName: [''],
            custID: [''],
            //showSuccessAlert: [''],
        });
    }

    get f() { return this.SearchGroup.controls; }


    onSubmit() {
        // debugger;
        if (this.SearchGroup.invalid) {
            this.errorMessage = "Username or Password can not be empty";
            return;
        }
        this.resourcesLoaded = true;
        this.submitted = true;
        console.log("username.." + this.f.custName.value);
        console.log("custID.." + this.f.custID.value);
        console.log("stringfy.." + JSON.stringify(this.SearchGroup.value));
       
        this.wmUserServices.searchCustomer(this.f.userName.value)
            .pipe(first())
            .subscribe(
                data => {
                    let item = JSON.parse(sessionStorage.getItem("userData")) as SessionUserData;               
                    this.userRole = item.role;                   
                 
                    this.resourcesLoaded = false;
                },
                error => {
                    console.log("failure class" + error);
                    let errorStatus = error.status;
                    if (errorStatus == '401') {
                        this.errorMessage = ErrorMessages.LOGIN_401;
                        this.resourcesLoaded = false;
                        //  errorMessage = `status: ${error.status},Message: ${ErrorMessages.LOGIN_401}`;                        
                    } else if (errorStatus == '500') {
                        this.errorMessage = ErrorMessages.LOGIN_500;
                        this.resourcesLoaded = false;
                    } else {
                        this.errorMessage = "Validation error";
                        this.resourcesLoaded = false;
                    }
                    //window.alert(errorMessage);

                    //this.message = "Please enter valid username/password"
                   // this.WalletService.isUserLoggedIn = false;                    
                });
    }

    RegisterInfo() {

        this.router.navigate(['/CustReg']);
    }
    ForgotPasswordPage() {
        this.router.navigate(['/ForgotPwd']);

    }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}