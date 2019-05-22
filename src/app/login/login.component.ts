import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    Status: string;

    constructor(
        private formBuilder: FormBuilder,
        private WalletService: WalletService,
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
        this.submitted = true;
        console.log("username.."+this.f.userName.value);
        console.log("password.."+this.f.Password.value);
        console.log("stringfy.."+JSON.stringify(this.loginForm.value));
        this.WalletService.customerLogin(this.f.userName.value,this.f.Password.value)
            .pipe(first())
            .subscribe(
            data => {
                    /*this.router.navigate(['/ClientReg2']);*/ //
                    //this.router.navigate(['/PostReg']);
                    console.log("data from dara"+data);
                    let resBody = {};
                    data = JSON.parse(data);
                    
                    console.log("data from resBody"+data.role);
                    //console.log("data from resBody status"+resBody.status);
                    //if(resBody.status && resBody.status == 401)
                    //    alert("Please enter correct username");
                        //this.showSuccessAlert = "Please enter correct username";
                   // else
                   // if(data.Status == 200)
                    this.router.navigate(['/CliAccPage']);
                },
                error => {
                    
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