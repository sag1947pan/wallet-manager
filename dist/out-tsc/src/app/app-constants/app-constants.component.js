import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AppConstantsComponent = /** @class */ (function () {
    function AppConstantsComponent() {
    }
    AppConstantsComponent.prototype.ngOnInit = function () {
    };
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
    AppConstantsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-app-constants',
            templateUrl: './app-constants.component.html',
            styleUrls: ['./app-constants.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AppConstantsComponent);
    return AppConstantsComponent;
}());
export { AppConstantsComponent };
//# sourceMappingURL=app-constants.component.js.map