import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from '../app-material/app-material.module';
//import { WalletHeaderComponent } from '../wallet-header/wallet-header.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ClientAccountPageRoutingModule } from './client-Acc-Page-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PaymentProfileComponent } from './payment-profile/payment-profile.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';
import { MydetailsComponent } from './mydetails/mydetails.component';
import { RoleProfileComponent } from './role-profile/role-profile.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { InitiatepaymentsComponent } from './initiatepayments/initiatepayments.component';
//import { ClientAccHeaderComponent } from './client-acc-header/client-acc-header.component';

@NgModule({
    declarations: [AdminComponent, MyProfileComponent, HomeComponent, AddUserComponent, PaymentProfileComponent, BankDetailsComponent, MydetailsComponent, RoleProfileComponent, UpdatePasswordComponent, InitiatepaymentsComponent,],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AppMaterialModule,
      HttpClientModule,
      SharedModule,
      ClientAccountPageRoutingModule
  ]
})
export class clientAccPagemodule { }
