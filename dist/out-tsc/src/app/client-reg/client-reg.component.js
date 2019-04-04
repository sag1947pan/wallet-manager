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
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],
            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            companyRegNumber: [''],
            webSiteAddress: [''],
            addressLine2: [''],
            RegRoadNo: [''],
            RegaddressLine1: [''],
            RegaddressLine2: [''],
            RegtownCityName: [''],
            RegstateCountryName: [''],
            RegcountryName: [''],
            RegpostCode: [''],
            contactNumber: [''],
            yourDeskNumber: [''],
        });
    };
    Object.defineProperty(ClientRegComponent.prototype, "f", {
        get: function () { return this.clientRegisterForm.controls; },
        enumerable: true,
        configurable: true
    });
    ClientRegComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        if (this.clientRegisterForm.invalid) {
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
            this.clientRegisterForm.patchValue({
                RegRoadNo: this.clientRegisterForm.value.RoadNo,
                RegaddressLine1: this.clientRegisterForm.value.addressLine1,
                RegaddressLine2: this.clientRegisterForm.value.addressLine2,
                RegtownCityName: this.clientRegisterForm.value.townCityName,
                RegstateCountryName: this.clientRegisterForm.value.stateCountryName,
                RegcountryName: this.clientRegisterForm.value.countryName,
                RegpostCode: this.clientRegisterForm.value.postCode,
            });
        }
        else {
            this.clientRegisterForm.patchValue({
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