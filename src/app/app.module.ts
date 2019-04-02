import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { ClientRegComponent } from './client-reg/client-reg.component';
import { AppConstantsComponent } from './app-constants/app-constants.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { Clientreg2Component } from './clientreg2/clientreg2.component';

@NgModule({
  declarations: [
    AppComponent,
    SelfRegistrationComponent,
        WalletHeaderComponent,
        WalletFooterComponent,
        ClientRegComponent,
        AppConstantsComponent,
        WalletBodyComponent,
        Clientreg2Component
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormlyModule.forRoot(),
      FormlyBootstrapModule,
      HttpClientModule,
      RouterModule.forRoot([

          { path: '', redirectTo: '/Main', pathMatch: 'full' },
          { path: 'Dash', component: AppComponent },
          { path: 'Main', component: WalletBodyComponent },
          { path: 'Self', component: SelfRegistrationComponent },
          { path: 'ClientReg', component: ClientRegComponent },
          { path: 'ClientReg2', component: Clientreg2Component },

      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
