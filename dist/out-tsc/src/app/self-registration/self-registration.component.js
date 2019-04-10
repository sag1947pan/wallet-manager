import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
var SelfRegistrationComponent = /** @class */ (function () {
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
    SelfRegistrationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-self-registration',
            templateUrl: './self-registration.component.html',
            styleUrls: ['./self-registration.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            Router])
    ], SelfRegistrationComponent);
    return SelfRegistrationComponent;
}());
export { SelfRegistrationComponent };
//# sourceMappingURL=self-registration.component.js.map