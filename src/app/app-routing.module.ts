/// <reference path="self-registration/self-registration.component.ts" />
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SelfRegistrationComponent } from './self-registration/self-registration.component';
import { WalletHeaderComponent } from './wallet-header/wallet-header.component';
import { WalletFooterComponent } from './wallet-footer/wallet-footer.component';
import { ClientRegComponent } from './client-reg/client-reg.component';

const routes: Routes = [

    { path: '', redirectTo: '/Main', pathMatch: 'full' },
    { path: 'Dash', component: AppComponent },
    { path: 'Main', component: WalletHeaderComponent },
    { path: 'Self', component: SelfRegistrationComponent },
    { path: 'ClientReg', component: ClientRegComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes),
    RouterModule.forChild(routes),
        CommonModule],
    exports: [RouterModule]
})

export class AppRoutingModule { }