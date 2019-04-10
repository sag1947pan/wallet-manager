import * as tslib_1 from "tslib";
import { Component, ElementRef } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
import { WalletService } from 'src/app/wallet.service';
var ClientRegComponent = /** @class */ (function () {
    function ClientRegComponent(formBuilder, router, elRef, WalletService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.elRef = elRef;
        this.WalletService = WalletService;
        this.submitted = false;
        this.Submitted2 = false;
        this.Tab1Validated = false;
        this.Det1 = true;
        this.Det2 = false;
        this.companyNameMsg = AppConstantsComponent.companyNameMsg;
        this.BuildingMsg = AppConstantsComponent.BuildingMsg;
        this.AddressLineMsg = AppConstantsComponent.AddressLineMsg;
        this.TownMsg = AppConstantsComponent.TownMsg;
        this.StateMsg = AppConstantsComponent.StateMsg;
        this.CountryMsg = AppConstantsComponent.CountryMsg;
        this.PostCodeMsg = AppConstantsComponent.PostCodeMsg;
        this.FullNameMsg = AppConstantsComponent.FullNameMsg;
        this.RoleMsg = AppConstantsComponent.RoleMsg;
        this.EmailReqMsg = AppConstantsComponent.EmailReqMsg;
        this.EmailValidMsg = AppConstantsComponent.EmailValidMsg;
        this.ContactNumMsg = AppConstantsComponent.ContactNumMsg;
        this.SecurityQuesMsg = AppConstantsComponent.SecurityQuesMsg;
        this.SecuirtyAnsMsg = AppConstantsComponent.SecurityQuesMsg;
    }
    ClientRegComponent.prototype.ngOnInit = function () {
        this.clientRegisterForm = this.formBuilder.group({
            companyName: ['', Validators.required],
            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            companyRegNumber: [''],
            webSiteAddress: [''],
            contactNumber: [''],
            yourDeskNumber: [''],
            Password: [''],
        });
        this.clientRegisterForm2 = this.formBuilder.group({
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],
            addressLine2: [''],
            RegRoadNo: [''],
            RegaddressLine1: [''],
            RegaddressLine2: [''],
            RegtownCityName: [''],
            RegstateCountryName: [''],
            RegcountryName: [''],
            RegpostCode: [''],
        });
    };
    Object.defineProperty(ClientRegComponent.prototype, "f", {
        get: function () { return this.clientRegisterForm.controls; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClientRegComponent.prototype, "f2", {
        get: function () { return this.clientRegisterForm2.controls; },
        enumerable: true,
        configurable: true
    });
    ClientRegComponent.prototype.onSubmit = function () {
        debugger;
        this.submitted = true;
        if (this.clientRegisterForm.invalid) {
            return;
        }
        else {
            this.Tab1Validated = true;
            this.Det1 = false;
            this.Det2 = true;
        }
    };
    ClientRegComponent.prototype.onSubmitTab2 = function () {
        var _this = this;
        debugger;
        this.Submitted2 = true;
        if (this.clientRegisterForm2.invalid) {
            return;
        }
        else {
            this.WalletService.customerRegService(JSON.stringify(this.clientRegisterForm.value))
                .pipe(first())
                .subscribe(function (data) {
                _this.Status = data.Status;
                _this.CustomerCode = data.CustomerCode;
                _this.SuccessMessage = data.SuccessMessage;
                _this.router.navigate(['/ClientReg2']);
                alert("Your Customer Id is :" + (_this.CustomerCode));
            }, function (error) { return (_this.error = error); });
        }
    };
    ClientRegComponent.prototype.addressChecked = function (e) {
        debugger;
        if (e.target.checked) {
            this.clientRegisterForm2.patchValue({
                RegRoadNo: this.clientRegisterForm2.value.RoadNo,
                RegaddressLine1: this.clientRegisterForm2.value.addressLine1,
                RegaddressLine2: this.clientRegisterForm2.value.addressLine2,
                RegtownCityName: this.clientRegisterForm2.value.townCityName,
                RegstateCountryName: this.clientRegisterForm2.value.stateCountryName,
                RegcountryName: this.clientRegisterForm2.value.countryName,
                RegpostCode: this.clientRegisterForm2.value.postCode,
            });
        }
        else {
            this.clientRegisterForm2.patchValue({
                RegRoadNo: '',
                RegaddressLine1: '',
                RegaddressLine2: '',
                RegtownCityName: '',
                RegstateCountryName: '',
                RegcountryName: '',
                RegpostCode: '',
            });
        }
    };
    ClientRegComponent.prototype.tab1clk = function () {
        this.Det1 = true;
        this.Det2 = false;
    };
    ClientRegComponent.prototype.tab2clk = function () {
        this.Det1 = false;
        this.Det2 = true;
    };
    ClientRegComponent = tslib_1.__decorate([
        Component({
            selector: 'app-client-reg',
            templateUrl: './client-reg.component.html',
            styleUrls: ['./client-reg.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router,
            ElementRef,
            WalletService])
    ], ClientRegComponent);
    return ClientRegComponent;
}());
export { ClientRegComponent };
//# sourceMappingURL=client-reg.component.js.map