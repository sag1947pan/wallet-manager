import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var Clientreg2Component = /** @class */ (function () {
    function Clientreg2Component(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.tab1 = true;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = false;
    }
    Clientreg2Component.prototype.ngOnInit = function () {
        this.clientRegisterForm2Tab1 = this.formBuilder.group({
            customerId: ['', Validators.required],
            paymentVolume: ['', Validators.required],
            Amountlimit: ['', Validators.required],
            amtLmtPerPayment: ['', Validators.required],
            payLmtPerFile: ['', Validators.required],
            filesLmtPerday: ['', Validators.required],
            msgsLmtPerday: ['', Validators.required],
            activeDaysForPayment: ['', Validators.required],
            currency1: ['', Validators.required],
            currencyFmtForPayments: ['', Validators.required],
        });
        this.clientRegisterForm2Tab2 = this.formBuilder.group({
            currencyFmtForBene: ['', Validators.required],
            reminderemail: ['', Validators.required],
            remindersms: ['', Validators.required],
            fileauthorization: ['', Validators.required],
            margins: [''],
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
            securitycode: ['', Validators.required],
            firstname: ['', Validators.required],
            lastname: ['', Validators.required],
        });
        this.clientRegisterForm2Tab4 = this.formBuilder.group({
            role: ['', Validators.required],
            email: ['', Validators.required],
            usertype: ['', Validators.required],
            yourmobileNumber: ['', Validators.required],
            yourdeskNumber: ['', Validators.required],
            password: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
        });
    };
    Object.defineProperty(Clientreg2Component.prototype, "f1", {
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
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.onSubmitTab2 = function () {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = true;
        this.tab4 = false;
    };
    Clientreg2Component.prototype.onSubmitTab3 = function () {
        this.tab1 = false;
        this.tab2 = false;
        this.tab3 = false;
        this.tab4 = true;
    };
    Clientreg2Component.prototype.onSubmitTab4 = function () {
        this.tab1 = false;
        this.tab2 = true;
        this.tab3 = false;
        this.tab4 = false;
    };
    Clientreg2Component = tslib_1.__decorate([
        Component({
            selector: 'app-clientreg2',
            templateUrl: './clientreg2.component.html',
            styleUrls: ['./clientreg2.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router])
    ], Clientreg2Component);
    return Clientreg2Component;
}());
export { Clientreg2Component };
//# sourceMappingURL=clientreg2.component.js.map