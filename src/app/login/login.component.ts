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
            customerId: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    get f() { return this.loginForm.controls; }

    onSubmit() {
        debugger;
        this.submitted = true;

        this.WalletService.customerLogin(this.f.customerId.value, this.f.password.value)
            .pipe(first())
            .subscribe(
                data => {
                    /*this.router.navigate(['/ClientReg2']);*/ //
                    this.router.navigate(['/PostReg']);
                },
                error => {
                    //this.router.navigate(['/ClientReg2']);
                    this.router.navigate(['/PostReg']);
                });
    }

}
