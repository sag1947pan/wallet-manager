import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
    selector: 'app-update-password',
    templateUrl: './update-password.component.html',
    styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

    PasswordGroup: FormGroup;

    hide = true;

    constructor(private formBuilder: FormBuilder,
        private router: Router, ) { }

    ngOnInit() {

        this.PasswordGroup = this.formBuilder.group({
            currPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            newPasword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmnewPassword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmOTP: ['', Validators.required],

        }, { validator: matchingPasswords('newPasword', 'confirmnewPassword') });

    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        let password = group.controls[passwordKey];
        let passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({ mismatchedPasswords: true })
        }
    }
}

