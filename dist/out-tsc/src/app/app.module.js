import * as tslib_1 from "tslib";
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { BeneDetailsComponent } from './bene-details/bene-details.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { AppConstantsComponent } from './app-constants/app-constants.component';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [
                AppComponent,
                SelfRegistrationComponent,
                BeneDetailsComponent,
                WalletHeaderComponent,
                WalletFooterComponent,
                ClientRegComponent,
                AppConstantsComponent
            ],
            imports: [
                BrowserModule,
                AppRoutingModule,
                ReactiveFormsModule,
                FormlyModule.forRoot(),
                FormlyBootstrapModule,
                RouterModule.forRoot([
                    { path: '', redirectTo: '/Main', pathMatch: 'full' },
                    { path: 'Dash', component: AppComponent },
                    { path: 'Main', component: WalletHeaderComponent },
                    { path: 'Self', component: SelfRegistrationComponent },
                    { path: 'ClientReg', component: ClientRegComponent },
                ])
            ],
            providers: [],
            bootstrap: [AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map