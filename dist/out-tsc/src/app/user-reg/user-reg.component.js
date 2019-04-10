import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
import { Router } from '@angular/router';
var UserRegComponent = /** @class */ (function () {
    function UserRegComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
        this.submitted1 = false;
        this.submitted2 = false;
        this.Det1 = true;
        this.Det2 = false;
        this.Det3 = false;
        this.commonReqMsg = AppConstantsComponent.commonreqMsg;
    }
    UserRegComponent.prototype.ngOnInit = function () {
        this.userRegisterForm = this.formBuilder.group({
            Email: ['', Validators.required],
            Mobilenumber: [''],
            Password: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            Name: ['', Validators.required],
            Roadno: ['', Validators.required],
            addressLine1: ['', Validators.required],
            addressLine2: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            PostCode: ['', Validators.required],
        });
        this.userRegisterFormTab2 = this.formBuilder.group({
            Currency: ['', Validators.required],
            currency1: ['', Validators.required],
            CountryBank: ['', Validators.required],
            Fxrate: ['', Validators.required],
            Amount: ['', Validators.required],
            Bankname: ['', Validators.required],
            ClearingCode: ['', Validators.required],
            AccountNumber: ['', Validators.required],
        });
        this.userRegisterFormTab3 = this.formBuilder.group({
            CompanyName: ['', Validators.required],
            comRoadno: ['', Validators.required],
            comaddressLine1: ['', Validators.required],
            comaddressLine2: ['', Validators.required],
            comtownCityName: ['', Validators.required],
            comstateCountryName: ['', Validators.required],
            comcountryName: ['', Validators.required],
            comPostCode: ['', Validators.required],
            UniqueNumber: ['', Validators.required],
            OfficeEmail: ['', Validators.required],
            contactNumber: [''],
            AdditionalInputs: ['', Validators.required],
            UploadSupporting: ['', Validators.required],
            EnterOTP: ['', Validators.required],
            Customerid: ['', Validators.required],
        });
    };
    Object.defineProperty(UserRegComponent.prototype, "f", {
        get: function () { return this.userRegisterForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegComponent.prototype, "f2", {
        get: function () { return this.userRegisterFormTab2.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(UserRegComponent.prototype, "f3", {
        get: function () { return this.userRegisterFormTab3.controls; },
        enumerable: true,
        configurable: true
    });
    UserRegComponent.prototype.tab1clk = function () {
        this.Det1 = true;
        this.Det2 = false;
        this.Det3 = false;
    };
    UserRegComponent.prototype.tab2clk = function () {
        this.Det1 = false;
        this.Det2 = true;
        this.Det3 = false;
    };
    UserRegComponent.prototype.tab3clk = function () {
        this.Det1 = false;
        this.Det2 = false;
        this.Det3 = true;
    };
    UserRegComponent.prototype.onSubmitTab1 = function () {
        this.submitted = true;
        if (this.userRegisterForm.invalid) {
            return;
        }
        this.tab2clk();
    };
    UserRegComponent.prototype.onSubmitTab2 = function () {
        debugger;
        this.submitted1 = true;
        if (this.userRegisterFormTab2.invalid) {
            return;
        }
        this.tab3clk();
    };
    UserRegComponent.prototype.onSubmitTab3 = function () {
        this.submitted2 = true;
        if (this.userRegisterFormTab3.invalid) {
            return;
        }
        alert("Successfully Registered!");
        this.router.navigate(['/Login']);
    };
    UserRegComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-reg',
            templateUrl: './user-reg.component.html',
            styleUrls: ['./user-reg.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router])
    ], UserRegComponent);
    return UserRegComponent;
}());
export { UserRegComponent };
//# sourceMappingURL=user-reg.component.js.map