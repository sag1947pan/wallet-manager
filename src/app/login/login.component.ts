import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;

    constructor(private formBuilder: FormBuilder,
        private WalletService: WalletService,
        private router: Router,) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            Email: ['', Validators.required],
            Password: ['', Validators.required],
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
       // debugger;
        this.submitted = true;
        console.log("username.."+this.f.Email.value);
        console.log("password.."+this.f.Password.value);
        console.log("username form value.."+this.loginForm.value);
        console.log("stringfy.."+JSON.stringify(this.loginForm.value));
        this.WalletService.customerLogin('myname','mypassword')
            .pipe(first())
            .subscribe(
                data => {
                    /*this.router.navigate(['/ClientReg2']);*/ //
                    //this.router.navigate(['/PostReg']);
                    this.router.navigate(['/CliAccPage']);
                },
                error => {
                    //this.router.navigate(['/ClientReg2']);
                    //this.router.navigate(['/PostReg']);
                    this.router.navigate(['/CliAccPage']);
                    
                });
    }

    RegisterInfo() {

        this.router.navigate(['/CustReg']);
    }
    ForgotPasswordPage() {
        this.router.navigate(['/ForgotPwd']);

    }

}
