import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';

import { AppMaterialModule } from '../app-material/app-material.module';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';


import { WmHomeComponent } from './wm-home/wm-home.component';
import { wmadminPageRoutingModule } from './wm-admin-routing.module';


@NgModule({
    declarations: [WmHomeComponent,],
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
