import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { from } from 'rxjs';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router'

@Component({
  selector: 'app-bene-reg-new-acc',
  templateUrl: './bene-reg-new-acc.component.html',
  styleUrls: ['./bene-reg-new-acc.component.css'],
})
export class BeneRegNewAccComponent implements OnInit {
    beneNewAccGroup: FormGroup;
    submitted = false;
    SuccessMessage: string;
    errorMessage: string;
    constructor(
        private formBuilder: FormBuilder,
        private route: Router,) { }

    ngOnInit() {
        this.beneNewAccGroup = this.formBuilder.group({
            emailId: ['', Validators.required],
            mobileNumber: [''],
            payerCode: ['', Validators.required],
            password: ['', Validators.required],
            confirmPassword: ['', Validators.required],
            //checkVerify:[''],
        }, {validator: this.checkIfMatchingPasswords('password', 'confirmPassword')});
  }
    //Check the password matching
    checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
        return (group: FormGroup) => {
            let passwordInput = group.controls[passwordKey],
                passwordConfirmationInput = group.controls[passwordConfirmationKey];
            if (passwordInput.value !== passwordConfirmationInput.value) {
                this.errorMessage = "Password and confirm password should be same";
                return passwordConfirmationInput.setErrors({ notEquivalent: true })
            }
            else {
                this.errorMessage = "";
                return passwordConfirmationInput.setErrors(null);
            }
        }
    }
    //Register form submit
    onSubmit() {
        //// debugger;
        //if (this.beneNewAccGroup.invalid) {
        //    this.errorMessage = "Please fill the required fields";
        //    return;
        //}
        //this.errorMessage = "";
        //this.submitted = true;
        //this.SuccessMessage = "Registration Successfull";
        //console.log("stringfy.." + JSON.stringify(this.beneNewAccGroup.value));
        this.route.navigate(['/benePage']);
    }
}
