import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { FileUploadModule } from "ng2-file-upload";
import { MatStepperModule, MatInputModule, MatButtonModule, MatAutocompleteModule, MatChipsModule, MatExpansionModule, MatIconModule, MatSelectModule, MatCheckboxModule, MatDialogModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

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
import { UserRegComponent } from './user-reg/user-reg.component';
import { CustRegComponent } from './cust-reg/cust-reg.component';
import { DialogComponent } from './dialog/dialog.component';
import { BeneRegComponent } from './bene-reg/bene-reg.component';

@NgModule({
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
        ClientFileUploadComponent,
        UserRegComponent,
        CustRegComponent,
        DialogComponent,
        BeneRegComponent
  ],
  imports: [
    BrowserModule,
      AppRoutingModule,
      ReactiveFormsModule,
      FormsModule,
      FormlyModule.forRoot(),
      FormlyBootstrapModule,
      HttpClientModule,
      FileUploadModule,
      MatStepperModule,
      MatInputModule,
      MatButtonModule,
      MatAutocompleteModule,
      MatChipsModule,
      MatExpansionModule,
      MatIconModule,
      MatSelectModule,
      MatCheckboxModule,
      BrowserAnimationsModule,
      MatDialogModule,
      MatCardModule,
      RouterModule.forRoot([

          { path: '', redirectTo: '/Main', pathMatch: 'full' },
          { path: 'Dash', component: AppComponent },
          { path: 'Main', component: WalletBodyComponent },
          { path: 'Self', component: SelfRegistrationComponent },
          { path: 'ClientReg', component: ClientRegComponent },
          { path: 'ClientReg2', component: Clientreg2Component },
          { path: 'Login', component: LoginComponent },
          { path: 'FileUpload', component: ClientFileUploadComponent },
          { path: 'UserReg', component: UserRegComponent },
          { path: 'CustReg', component: CustRegComponent },
          { path: 'BeneReg', component: BeneRegComponent },
          

      ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogComponent]
})
export class AppModule { }
