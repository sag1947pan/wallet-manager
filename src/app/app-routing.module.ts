import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletBodyComponent } from './wallet-body/wallet-body.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { ClientRegComponent } from './client-reg/client-reg.component'; 
import { Clientreg2Component } from './clientreg2/clientreg2.component'; 
import { LoginComponent } from './login/login.component';
import { CustRegComponent } from './cust-reg/cust-reg.component';

const routes: Routes = [

    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Dash', component: AppComponent },
    { path: 'Main', component: WalletBodyComponent },
    { path: 'Self', component: SelfRegistrationComponent },
    { path: 'ClientReg', component: ClientRegComponent },
    { path: 'ClientReg2', component: Clientreg2Component },
    { path: 'Login', component: LoginComponent },
    { path: 'CustReg', component: CustRegComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
        CommonModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }