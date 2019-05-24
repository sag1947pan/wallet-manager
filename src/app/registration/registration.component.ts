import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
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
    public selectedRadio = "Payee";

    constructor(
        private formBuilder: FormBuilder,
        //selectedRadio : new FormControl(), 
        private router: Router,) 
        { }

    ngOnInit() {
        this.regGroup = this.formBuilder.group({
            selectedRadio : ['Payee'],//new FormControl(),
        })
    }
    onSubmitRegister(){
        console.log("form alon value"+this.selectedRadio);
        console.log("form alon value"+this.regGroup.get('selectedRadio').value);
        let selValue = this.selectedRadio;
        if(selValue == 'Payee'){
            console.log("selValue.."+selValue);
            this.router.navigate(['/CustReg']);
        }else if(selValue == 'Bene'){
            this.router.navigate(['/BeneReg']);
        }
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