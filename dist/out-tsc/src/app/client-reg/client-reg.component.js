import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
var ClientRegComponent = /** @class */ (function () {
    function ClientRegComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
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
        debugger;
        this.submitted = true;
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.clientRegisterForm.value));
        // stop here if form is invalid
        if (this.clientRegisterForm.invalid) {
            return;
        }
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.clientRegisterForm.value));
    };
    ClientRegComponent.prototype.addressChecked = function (e) {
        if (e.target.checked) {
            //alert(AppConstantsComponent.Key1);
        }
    };
    ClientRegComponent = tslib_1.__decorate([
        Component({
            selector: 'app-client-reg',
            templateUrl: './client-reg.component.html',
            styleUrls: ['./client-reg.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router])
    ], ClientRegComponent);
    return ClientRegComponent;
}());
export { ClientRegComponent };
//# sourceMappingURL=client-reg.component.js.map