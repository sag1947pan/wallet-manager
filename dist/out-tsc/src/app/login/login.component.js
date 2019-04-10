import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, WalletService, router) {
        this.formBuilder = formBuilder;
        this.WalletService = WalletService;
        this.router = router;
        this.submitted = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            customerId: ['', Validators.required],
            password: ['', Validators.required],
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () { return this.loginForm.controls; },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        this.WalletService.customerLogin(this.f.customerId.value, this.f.password.value)
            .pipe(first())
            .subscribe(function (data) {
            _this.router.navigate(['/ClientReg2']);
        }, function (error) {
            _this.router.navigate(['/ClientReg2']);
        });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            WalletService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map