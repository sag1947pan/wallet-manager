import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppMaterialModule } from '../app-material/app-material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { ClientAccountPageRoutingModule } from './client-Acc-Page-routing.module';
import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  declarations: [AdminComponent, MyProfileComponent, HomeComponent, AddUserComponent],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      
      FormsModule,
      AppMaterialModule,
      ClientAccountPageRoutingModule
  ]
})
export class clientAccPagemodule { }
