var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
var Clientreg2Component = (function () {
    function Clientreg2Component(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
        this.commonReqMsg = AppConstantsComponent.commonreqMsg;
    }
    Clientreg2Component.prototype.ngOnInit = function () {
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
    };
    Object.defineProperty(Clientreg2Component.prototype, "f", {
        get: function () { return this.clientRegisterForm2Tab1.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clientreg2Component.prototype, "f2", {
        get: function () { return this.clientRegisterForm2Tab2.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clientreg2Component.prototype, "f3", {
        get: function () { return this.clientRegisterForm2Tab3.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Clientreg2Component.prototype, "f4", {
        get: function () { return this.clientRegisterForm2Tab4.controls; },
        enumerable: true,
        configurable: true
    });
    Clientreg2Component.prototype.onSubmitTab1 = function () {
        ;
        this.submitted = true;
        if (this.clientRegisterForm2Tab1.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.onSubmitTab2 = function () {
        this.submitted = true;
        debugger;
        if (this.clientRegisterForm2Tab2.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.onSubmitTab3 = function () {
        this.submitted = true;
        debugger;
        if (this.clientRegisterForm2Tab3.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
    };
    Clientreg2Component.prototype.onSubmitTab4 = function () {
        this.submitted = true;
        debugger;
        if (this.clientRegisterForm2Tab4.invalid) {
            return;
        }
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
        alert("Your Details Saved Successfully!");
        this.router.navigate(['/Main']);
    };
    Clientreg2Component.prototype.tab1clk = function () {
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.tab2clk = function () {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.tab3clk = function () {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.tab4clk = function () {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
    };
    Clientreg2Component = __decorate([
        Component({
            selector: 'app-clientreg2',
            templateUrl: './clientreg2.component.html',
            styleUrls: ['./clientreg2.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, Router])
    ], Clientreg2Component);
    return Clientreg2Component;
}());
Clientreg2Component = Clientreg2Component;
//# sourceMappingURL=clientreg2.component.js.map