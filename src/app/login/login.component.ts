import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { RegistrationServices } from 'src/app/services/registration.services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';
import { ErrorMessages } from 'src/app/resources/error.messages';
//import { AdminUserData } from 'src/app/AdminData.model';
import { SessionUserData } from 'src/app/model/sessionData.model';
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
            userName: ['kartheek_wmuser1@test.com', Validators.compose([Validators.required, emailValidator])],
            Password: ['temp123456', Validators.compose([Validators.required, Validators.minLength(8)])],
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
       
        this.RegistrationServices.customerLogin(this.f.userName.value, this.f.Password.value)
            .pipe(first())
            .subscribe(
                data => {
                    this.WalletService.isUserLoggedIn = true;                 
                 
                   //Store the required data in Session Storage.
                    sessionStorage.setItem("userName", this.f.userName.value);               
                    sessionStorage.setItem("userData", JSON.stringify(data.body));
                    console.log("data..."+data);
                    // Read item:
                   // let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;  
                    let item = JSON.parse(sessionStorage.getItem("userData")) as SessionUserData;               
                    this.userRole = item.role;                   
                 
                 
                    if(item.user_type == "wmuser"){//WM Employee
                        this.router.navigate(['/wmAdminPage', data]);
                        console.log("redirectd to wmuser page");
                    }else if(item.user_type == "custuser"){ //Customer 
                        this.router.navigate(['/CliAccPage', data]);
                    }else if(item.user_type == "bankuser"){//Bank user
                        this.router.navigate(['/CliAccPage', data]);
                    }else if(item.user_type == "benuser"){//BENE
                        this.router.navigate(['/benePage', data]);
                    }else if(item.user_type == "bankCustUser"){//bank customer
                        this.router.navigate(['/CliAccPage', data]);
                    }else { //move to default page

                    }
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