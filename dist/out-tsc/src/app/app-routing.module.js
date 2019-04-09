var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
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
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes),
                RouterModule.forChild(routes),
                CommonModule],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map