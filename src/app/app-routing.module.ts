import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { ClientRegComponent } from './client-reg/client-reg.component'; 
import { Clientreg2Component } from './clientreg2/clientreg2.component'; 
import { LoginComponent } from './login/login.component';
import { CustRegComponent } from './cust-reg/cust-reg.component';
import { UserRegComponent } from './user-reg/user-reg.component';
import { ClientFileUploadComponent } from './client-file-upload/client-file-upload.component';
import { BeneRegComponent } from './bene-reg/bene-reg.component';
import { PostRegComponent } from './post-reg/post-reg.component';
import { PasswordForgotComponent } from './password-forgot/password-forgot.component';

const appRoutes: Routes = [{ path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Dash', component: AppComponent },
    { path: 'Main', component: WalletBodyComponent },
    { path: 'Self', component: SelfRegistrationComponent },
    { path: 'Registration', component: RegistrationComponent },
    { path: 'ClientReg', component: ClientRegComponent },
    { path: 'ClientReg2', component: Clientreg2Component },
    { path: 'Login', component: LoginComponent },
    { path: 'FileUpload', component: ClientFileUploadComponent },
    { path: 'UserReg', component: UserRegComponent },
    { path: 'CustReg', component: CustRegComponent },
    { path: 'BeneReg', component: BeneRegComponent },
    { path: 'PostReg', component: PostRegComponent },
    { path: 'ForgotPwd', component: PasswordForgotComponent },
   { path: 'CliAccPage', loadChildren: './client-Acc-Page/client-Acc-Page.module#clientAccPagemodule' }
]

@NgModule({
    imports: [RouterModule.forRoot(appRoutes),
   // RouterModule.forChild(routes),
        CommonModule
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }