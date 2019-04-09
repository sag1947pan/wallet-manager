var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from "ng2-file-upload";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { AppConstantsComponent } from './app-constants/app-constants.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { Clientreg2Component } from './clientreg2/clientreg2.component';
import { LoginComponent } from './login/login.component';
import { ClientFileUploadComponent } from './client-file-upload/client-file-upload.component';
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                SelfRegistrationComponent,
                WalletHeaderComponent,
                WalletFooterComponent,
                ClientRegComponent,
                AppConstantsComponent,
                WalletBodyComponent,
                Clientreg2Component,
                LoginComponent,
                ClientFileUploadComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                ReactiveFormsModule,
                FormlyModule.forRoot(),
                FormlyBootstrapModule,
                HttpClientModule,
                FileUploadModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: '/Main', pathMatch: 'full' },
                    { path: 'Dash', component: AppComponent },
                    { path: 'Main', component: WalletBodyComponent },
                    { path: 'Self', component: SelfRegistrationComponent },
                    { path: 'ClientReg', component: ClientRegComponent },
                    { path: 'ClientReg2', component: Clientreg2Component },
                    { path: 'Login', component: LoginComponent },
                    { path: 'FileUpload', component: ClientFileUploadComponent },
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
AppModule = AppModule;
//# sourceMappingURL=app.module.js.map