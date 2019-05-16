import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin/admin.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { HomeComponent } from './home/home.component';
import { AddUserComponent } from './add-user/add-user.component';
import { PaymentProfileComponent } from './payment-profile/payment-profile.component';
import { BankDetailsComponent } from './bank-details/bank-details.component';

const clientPageroutes: Routes = [
    { path: '', redirectTo: '/CliAccPage/Home', pathMatch: 'full' },
    {
        path: 'Home', component: HomeComponent,
        children: [
            { path: 'Admin', component: AdminComponent },
            { path: 'MyProfile', component: MyProfileComponent },
            { path: 'AddUser', component: AddUserComponent },
            { path: 'PaymentProfile', component: PaymentProfileComponent },
            { path: 'BankDetails', component: BankDetailsComponent },
            {
                path: '', component: AdminComponent, pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(clientPageroutes)],
  exports: [RouterModule]
})
export class ClientAccountPageRoutingModule { }
