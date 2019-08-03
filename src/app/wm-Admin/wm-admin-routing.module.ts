import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WmHomeComponent } from './wm-home/wm-home.component';
import {WmBankSetupComponent} from './wm-bank-setup/wm-bank-setup.component';
import {SearchComponent} from './search/search.component';
import { CustomerSearchComponent } from './search/customersearch.component';

import { AuthGuard } from '../Guards/auth.guard';


const wmAdminPageroutes: Routes = [
    { path: '', redirectTo: '/wmAdminPage/wmHome', pathMatch: 'full' },
    {
        path: 'wmHome', component: WmHomeComponent, canActivate: [AuthGuard],
        children: [
            
            { path: 'BankSetup', component: WmBankSetupComponent },          
             
            {
                path: '', component: WmBankSetupComponent, pathMatch: 'full'
            },
            { path: 'BankSearch', component: SearchComponent },          
             
            {
                path: 'SearchSearch', component: SearchComponent, pathMatch: 'full'
            },
            {
                path: 'SearchCustomer', component: CustomerSearchComponent, pathMatch: 'full'
            },

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(wmAdminPageroutes)],
  exports: [RouterModule]
})


export class wmadminPageRoutingModule { }