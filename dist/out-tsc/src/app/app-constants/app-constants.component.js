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
var AppConstantsComponent = (function () {
    function AppConstantsComponent() {
    }
    AppConstantsComponent.prototype.ngOnInit = function () {
    };
    AppConstantsComponent.commonreqMsg = "This Field is required";
    AppConstantsComponent.companyNameMsg = "Company Name is required";
    AppConstantsComponent.BuildingMsg = "BuildingNo/Street(Or)Road Name/Number is required";
    AppConstantsComponent.AddressLineMsg = "Address Line 1 is required";
    AppConstantsComponent.TownMsg = "Town/City is required";
    AppConstantsComponent.StateMsg = "State/Country is required";
    AppConstantsComponent.CountryMsg = "Country is required";
    AppConstantsComponent.PostCodeMsg = "PostCode is required";
    AppConstantsComponent.FullNameMsg = "Full Name is required";
    AppConstantsComponent.RoleMsg = "Role is required";
    AppConstantsComponent.EmailReqMsg = "Email is required";
    AppConstantsComponent.EmailValidMsg = "Email must be a valid email address";
    AppConstantsComponent.ContactNumMsg = "Mobile Number is required";
    AppConstantsComponent.SecurityQuesMsg = "Secuirty Question is reuired";
    AppConstantsComponent.SecuirtyAnsMsg = "Secuirty Answer is reuired";
    AppConstantsComponent = __decorate([
        Component({
            selector: 'app-app-constants',
            templateUrl: './app-constants.component.html',
            styleUrls: ['./app-constants.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppConstantsComponent);
    return AppConstantsComponent;
}());
AppConstantsComponent = AppConstantsComponent;
//# sourceMappingURL=app-constants.component.js.map