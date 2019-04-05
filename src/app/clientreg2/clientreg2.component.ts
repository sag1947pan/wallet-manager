import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';

@Component({
  selector: 'app-clientreg2',
  templateUrl: './clientreg2.component.html',
  styleUrls: ['./clientreg2.component.css']
})
export class Clientreg2Component implements OnInit {
    clientRegisterForm2Tab1: FormGroup;
    clientRegisterForm2Tab2: FormGroup;
    clientRegisterForm2Tab3: FormGroup;
    clientRegisterForm2Tab4: FormGroup;
    submitted = false;
    tab1 = true;
    tab2 = false;
    tab3 = false;
    tab4 = false;


    public commonReqMsg = AppConstantsComponent.commonreqMsg;
    


    constructor(private formBuilder: FormBuilder,
        private router: Router,) { }

    ngOnInit() {
        this.clientRegisterForm2Tab1 = this.formBuilder.group({
            customerId: [''],
            paymentVolume: ['', Validators.required],
            Amountlimit: [''],
            amtLmtPerPayment: [''],
            payLmtPerFile: [''],
            filesLmtPerday: [''],
            msgsLmtPerday: [''],
            activeDaysForPayment: ['', Validators.required],
            currency1: ['', Validators.required],
            currencyFmtForPayments: ['', Validators.required],
           
        });
        this.clientRegisterForm2Tab2 = this.formBuilder.group({
            currencyFmtForBene: ['', Validators.required],
            reminderemail: ['', Validators.required],
            remindersms: ['', Validators.required],
            fileauthorization: ['', Validators.required],
            margins: ['', Validators.required],
            FxTiers: [''],
            teamemail: ['', Validators.required],
            method: ['', Validators.required],
            debitprofile: ['', Validators.required],
            countrybank: ['', Validators.required],
            
        });
        this.clientRegisterForm2Tab3 = this.formBuilder.group({
            bankname: ['', Validators.required],
            clearingcode: ['', Validators.required],
            accountnumber: ['', Validators.required],
            cardtype: ['', Validators.required],
            cardname: ['', Validators.required],
            cardnumber: ['', Validators.required],
            expirydate: ['', Validators.required],
            expiryyear: ['', Validators.required],
            securitycode: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
            
        });
        this.clientRegisterForm2Tab4 = this.formBuilder.group({
            role: ['', Validators.required],
            emailId: ['', Validators.required],
            usertype: ['', Validators.required],
            yourmobileNumber: ['', Validators.required],
            yourdeskNumber: ['', Validators.required],
            password: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
        });
    }
    get f() { return this.clientRegisterForm2Tab1.controls; }
    get f2() { return this.clientRegisterForm2Tab2.controls; }
    get f3() { return this.clientRegisterForm2Tab3.controls; }
    get f4() { return this.clientRegisterForm2Tab4.controls; }

    onSubmitTab1() {
        ;
        this.submitted = true;
        if (this.clientRegisterForm2Tab1.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
    }
    onSubmitTab2() {
        this.submitted = true;
        debugger
        if (this.clientRegisterForm2Tab2.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = false;
    }
    onSubmitTab3() {
        this.submitted = true;
        debugger
        if (this.clientRegisterForm2Tab3.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
    }
    onSubmitTab4() {
        this.submitted = true;
        debugger
        if (this.clientRegisterForm2Tab4.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
        alert("Your Details Saved Successfully!" );
        this.router.navigate(['/Main']);
    }

    tab1clk() {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
    }
    tab2clk() {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
    }
    tab3clk() {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = false;
    }
    tab4clk() {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
    }

}
