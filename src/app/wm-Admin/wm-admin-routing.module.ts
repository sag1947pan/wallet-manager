import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WmHomeComponent } from './wm-home/wm-home.component';

import { AuthGuard } from '../Guards/auth.guard';


const wmAdminPageroutes: Routes = [
    { path: '', redirectTo: '/wmAdminPage/wmHome', pathMatch: 'full' },
    {
        path: 'wmHome', component: WmHomeComponent, canActivate: [AuthGuard],
        children: [
          
            // { path: 'CustomerAddress', component: AdminComponent },
            // { path: 'MyProfile', component: MyProfileComponent },
            // { path: 'AddUser', component: AddUserComponent },
            // { path: 'PaymentProfile', component: PaymentProfileComponent },
            // { path: 'BankDetails', component: BankDetailsComponent },
            // { path: 'MyDetails', component: MydetailsComponent },
            // { path: 'Role', component: RoleProfileComponent },
            // { path: 'UpdatePassword', component: UpdatePasswordComponent },
            // { path: 'InitiatePayments', component: InitiatepaymentsComponent },
            // { path: 'dashboard', component: DashboardComponent },
             
            {
                path: '', component: WmHomeComponent, pathMatch: 'full'
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(wmAdminPageroutes)],
  exports: [RouterModule]
})


export class wmadminPageRoutingModule { }