import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { RegistrationServices } from 'src/app/services/registration.services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';
import { ErrorMessages } from 'src/app/resources/error.messages';
import { AdminUserData } from 'src/app/AdminData.model';
import { from } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    Status: string;
    errorMessage: string;
    resourcesLoaded: boolean;
    userRole:string;


    constructor(
        private formBuilder: FormBuilder,
        private WalletService: WalletService,
        private RegistrationServices: RegistrationServices,
        private router: Router, ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.compose([Validators.required, emailValidator])],
            Password: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            showSuccessAlert: [''],
        });
    }

    get f() { return this.loginForm.controls; }


    onSubmit() {
        // debugger;
        if (this.loginForm.invalid) {
            this.errorMessage = "Username or Password can not be empty";
            return;
        }
        this.resourcesLoaded = true;
        this.submitted = true;
        console.log("username.." + this.f.userName.value);
        console.log("password.." + this.f.Password.value);
        console.log("stringfy.." + JSON.stringify(this.loginForm.value));
        //this.WalletService.customerLogin(this.f.userName.value,this.f.Password.value)
        this.RegistrationServices.customerLogin(this.f.userName.value, this.f.Password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.WalletService.isUserLoggedIn = true;
                    /*this.router.navigate(['/ClientReg2']);*/ //
                    //this.router.navigate(['/PostReg']);
                    console.log("data from dara" + data);
                    let resBody = {};
                    data = JSON.parse(data);

                    console.log("data from resBody" + data.role);
                    //this.resourcesLoaded = false;
                    //Ranjith : Check whether we an store data in local storage/ session storage.

                    sessionStorage.setItem("userName", this.f.userName.value);
                   // sessionStorage.setItem("password", this.f.Password.value);
                   
                    sessionStorage.setItem("userData", JSON.stringify(data));

                    // Read item:
                    let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
                    this.userRole = item.role;
                    var userTpe = data.user_type;
                    if(userTpe == "wmuser"){
                        this.router.navigate(['/wmAdminPage', data]);
                    }else if(userTpe == "custuser"){
                        this.router.navigate(['/CliAccPage', data]);
                    }else if(userTpe == "bankuser"){
                        this.router.navigate(['/CliAccPage', data]);
                    }/*else if(userTpe == "bankuser"){
                        this.router.navigate(['/CliAccPage', data]);
                    }else if(userTpe == "bankuser"){
                        this.router.navigate(['/CliAccPage', data]);
                    }else {
                        
                    }
                */
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
                    this.WalletService.isUserLoggedIn = false;
                    // this.router.navigate(['/CliAccPage']);
                    //this.message = "Please enter valid username/password";
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