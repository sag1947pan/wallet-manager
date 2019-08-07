import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';

import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
import { Router } from '@angular/router';
import { MatChipsModule } from '@angular/material/chips';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatIconModule } from '@angular/material/icon';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

export interface User {
    name: string;
}
@Component({
  selector: 'app-bene-reg',
  templateUrl: './bene-reg.component.html',
    styleUrls: ['./bene-reg.component.css'],
    providers: [{
        provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true }
    }]
})
export class BeneRegComponent implements OnInit {

    isLinear = false;
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;
    //panelOpenState = false;

    securityquestionCtrl = new FormControl();

    options: string[] = ['Please select Question 1', 'Please select Question 2', 'Please select Question 3 sadsasadaaaaaaaa'];

    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }



    constructor(private formBuilder: FormBuilder,
        private router: Router){ }

    ngOnInit() {

        this.firstFormGroup = this.formBuilder.group({
            nameCtrl: ['', Validators.required],
            lastnameCtrl: ['', Validators.required],
            emailCtrl: ['', Validators.required],
            mobileCtrl: ['', Validators.required],
            pwdCtrl: ['', Validators.required],
            securityquestionCtrl: ['', Validators.required],
            secanswerCtrl: ['', Validators.required],
            streetCtrl: ['', Validators.required],
            addr1Ctrl: ['', Validators.required],
            addr2Ctrl: ['', Validators.required],
            cityCtrl: ['', Validators.required],
            stateCtrl: ['', Validators.required],
            countryCtrl: ['', Validators.required],
            postcodeCtrl: ['', Validators.required],
        });

        this.secondFormGroup = this.formBuilder.group({
            currencyCtrl: ['', Validators.required],
            currency1Ctrl: ['', Validators.required],
            ctrybnkCtrl: ['', Validators.required],
            forexrateCtrl: ['', Validators.required],
            amountCtrl: ['', Validators.required],
            bankNameCtrl: ['', Validators.required],
            ClearingcodeCtrl: ['', Validators.required],
            AccountNoCtrl: ['', Validators.required],
        });   
  }

}
