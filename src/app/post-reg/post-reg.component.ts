import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, Validators, FormBuilder, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-reg',
  templateUrl: './post-reg.component.html',
    styleUrls: ['./post-reg.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class PostRegComponent implements OnInit {
    PaymentInfoGroup: FormGroup;
    BenefInfoGroup: FormGroup;
    CreditInfoGroup: FormGroup;
    UserInfoGroup: FormGroup;

    currencyFmtForBene = new FormControl();

    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];

    constructor(private formBuilder: FormBuilder,
        private router: Router,) { }

    ngOnInit() {
        this.PaymentInfoGroup = this.formBuilder.group({
            customerId: [''],
            paymentVolume: ['', Validators.required],
            Amountlimit: [''],
            //amtLmtPerPayment: [''],
            //payLmtPerFile: [''],
            //filesLmtPerday: [''],
            //msgsLmtPerday: [''],
            //activeDaysForPayment: ['', Validators.required],
            //currency1: ['', Validators.required],
            //currencyFmtForPayments: ['', Validators.required],

        });

        this.BenefInfoGroup = this.formBuilder.group({
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
        this.CreditInfoGroup = this.formBuilder.group({
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
        this.UserInfoGroup = this.formBuilder.group({
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

}
