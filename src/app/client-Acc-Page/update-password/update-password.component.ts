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
            NewPasword: ['', Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmNewPwd: ['',Validators.compose([Validators.required, Validators.minLength(8)])],
            confirmOTP: ['', Validators.required],

        });

  }

}
