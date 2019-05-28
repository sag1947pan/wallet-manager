import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import {RegistrationServices} from 'src/app/services/registration.services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';
import { ErrorMessages} from 'src/app/resources/error.messages';

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
    

    constructor(
        private formBuilder: FormBuilder,
        private WalletService: WalletService,
        private RegistrationServices: RegistrationServices,
        private router: Router,) 
        { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            userName: ['', Validators.required],
            Password: ['', Validators.required],
            showSuccessAlert:[''],
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
       // debugger;
        if(this.loginForm.invalid){
            this.errorMessage = "Username or Password can not be empty";
            return;
        }
        this.resourcesLoaded = true;
        this.submitted = true;
        console.log("username.."+this.f.userName.value);
        console.log("password.."+this.f.Password.value);
        console.log("stringfy.."+JSON.stringify(this.loginForm.value));
        //this.WalletService.customerLogin(this.f.userName.value,this.f.Password.value)
        this.RegistrationServices.customerLogin(this.f.userName.value,this.f.Password.value)
            .pipe(first())
            .subscribe(
            data => {
                this.WalletService.isUserLoggedIn = true;
                    /*this.router.navigate(['/ClientReg2']);*/ //
                    //this.router.navigate(['/PostReg']);
                    console.log("data from dara"+data);
                    let resBody = {};
                    data = JSON.parse(data);
                    
                    console.log("data from resBody"+data.role);                    
                    this.resourcesLoaded = false;
                    this.router.navigate(['/CliAccPage',data]);
                },
                error => {
                    console.log("failure class"+error);
                    let errorStatus = error.status;                    
                    if(errorStatus == '401'){
                        this.errorMessage = ErrorMessages.LOGIN_401;
                      //  errorMessage = `status: ${error.status},Message: ${ErrorMessages.LOGIN_401}`;                        
                    }else if(errorStatus == '500'){
                        this.errorMessage = ErrorMessages.LOGIN_500;
                    }else{
                        this.errorMessage = "Validation error";
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