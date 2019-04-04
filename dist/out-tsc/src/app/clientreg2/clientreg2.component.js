import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var Clientreg2Component = /** @class */ (function () {
    function Clientreg2Component(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    Clientreg2Component.prototype.ngOnInit = function () {
        this.clientRegisterForm2 = this.formBuilder.group({
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
    Object.defineProperty(Clientreg2Component.prototype, "f", {
        get: function () { return this.clientRegisterForm2.controls; },
        enumerable: true,
        configurable: true
    });
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