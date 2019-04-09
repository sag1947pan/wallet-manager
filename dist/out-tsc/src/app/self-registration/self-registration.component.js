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
import { Router } from '@angular/router';
var SelfRegistrationComponent = (function () {
    function SelfRegistrationComponent(formBuilder, router) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.submitted = false;
    }
    SelfRegistrationComponent.prototype.ngOnInit = function () {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]],
            cpassword: ['']
        }, { validator: this.checkPasswords });
    };
    SelfRegistrationComponent.prototype.checkPasswords = function (group) {
        var pass = group.controls.password.value;
        var confirmPass = group.controls.cpassword.value;
        return pass === confirmPass ? null : { notSame: true };
    };
    Object.defineProperty(SelfRegistrationComponent.prototype, "f", {
        get: function () { return this.registerForm.controls; },
        enumerable: true,
        configurable: true
    });
    SelfRegistrationComponent.prototype.onSubmit = function () {
        this.submitted = true;
        this.router.navigate(['/ClientReg']);
        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
        //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value))
    };
    SelfRegistrationComponent = __decorate([
        Component({
            selector: 'app-self-registration',
            templateUrl: './self-registration.component.html',
            styleUrls: ['./self-registration.component.css']
        }), 
        __metadata('design:paramtypes', [FormBuilder, Router])
    ], SelfRegistrationComponent);
    return SelfRegistrationComponent;
}());
SelfRegistrationComponent = SelfRegistrationComponent;
//# sourceMappingURL=self-registration.component.js.map