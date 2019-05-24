import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
    regGroup: FormGroup;
    submitted = false;
    Status: string;
    public selectedRadio = {"value":"Payee"};

    constructor(
        private formBuilder: FormBuilder,
       // selectedRadio = {"value":"Payee"},
        private router: Router,) 
        { }

    ngOnInit() {
        this.regGroup = this.formBuilder.group({
            selectedRadio: ['Payee'],
        })
    }
    onSubmitRegister(){
        console.log("form value"+this.regGroup.value.selectedRadio);
        //console.log("form alon value"+selected);
        console.log("form alon value"+this.regGroup.get('register'));
    }
    onSubmit() {
       // debugger;
        this.submitted = true;
        console.log("form value"+this.regGroup.value.radio);
    }

    RegisterInfo() {

        this.router.navigate(['/CustReg']);
    }
    ForgotPasswordPage() {
        this.router.navigate(['/ForgotPwd']);

    }

}