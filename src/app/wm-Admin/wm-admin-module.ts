import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from '../app-material/app-material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { WmHomeComponent } from './wm-home/wm-home.component';

import {WmBankSetupComponent} from './wm-bank-setup/wm-bank-setup.component';

import { wmadminPageRoutingModule } from './wm-admin-routing.module';
import {BankSuperAdminComponent} from '../wm-Admin/bank-super-admin/bank-super-admin.component';
import { ForexCurrenciesComponent } from '../wm-Admin/forex-currencies/forex-currencies.component';
import { CountriesListComponent } from '../wm-Admin/countries-list/countries-list.component';
import { InvoiceDataComponent } from '../wm-Admin/invoice-data/invoice-data.component';
import { BankDetailsComponent } from '../wm-Admin/bank-details/bank-details.component';

@NgModule({
    declarations: [WmHomeComponent, WmBankSetupComponent, BankSuperAdminComponent, ForexCurrenciesComponent, CountriesListComponent, InvoiceDataComponent, BankDetailsComponent],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FormsModule,
      AppMaterialModule,
      HttpClientModule,
      SharedModule,
      wmadminPageRoutingModule
  ]
})
export class wmadminPagemodule { }
