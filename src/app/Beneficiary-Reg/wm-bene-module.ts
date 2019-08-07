import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from '../app-material/app-material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';


import { BeneHomeComponent } from './bene-home/bene-home.component';

import { wmBenePageRoutingModule } from './wm-bene-routing.module';
import { BeneAddressComponent } from '../Beneficiary-Reg/bene-address/bene-address.component';
import { BeneProfileAddressComponent } from '../Beneficiary-Reg/bene-profile-address/bene-profile-address.component';

@NgModule({
    declarations: [BeneHomeComponent, BeneAddressComponent, BeneProfileAddressComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        AppMaterialModule,
        HttpClientModule,
        SharedModule,
        AgGridModule.withComponents([]),
        wmBenePageRoutingModule
    ]
})
export class wmBenePagemodule { }