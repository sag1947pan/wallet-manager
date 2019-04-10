import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { Clientreg2Component } from './clientreg2/clientreg2.component';
import { LoginComponent } from './login/login.component';
var routes = [
    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Dash', component: AppComponent },
    { path: 'Main', component: WalletBodyComponent },
    { path: 'Self', component: SelfRegistrationComponent },
    { path: 'ClientReg', component: ClientRegComponent },
    { path: 'ClientReg2', component: Clientreg2Component },
    { path: 'Login', component: LoginComponent },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes),
                RouterModule.forChild(routes),
                CommonModule],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map