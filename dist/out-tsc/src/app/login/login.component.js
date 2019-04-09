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
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
var LoginComponent = (function () {
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
    LoginComponent = __decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, (typeof (_a = typeof WalletService !== 'undefined' && WalletService) === 'function' && _a) || Object, Router])
    ], LoginComponent);
    return LoginComponent;
    var _a;
}());
LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map