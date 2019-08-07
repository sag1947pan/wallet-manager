import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BeneHomeComponent } from './bene-home/bene-home.component';
import { BeneAddressComponent } from './bene-address/bene-address.component';

import { AuthGuard } from '../Guards/auth.guard';


const benePageroutes: Routes = [
    { path: '', redirectTo: '/benePage/beneHome', pathMatch: 'full' },
    {
        path: 'beneHome', component: BeneHomeComponent, canActivate: [AuthGuard],
        children: [

            { path: 'beneAddress', component: BeneAddressComponent },

            {
                path: '', component: BeneAddressComponent, pathMatch: 'full'
            }

        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(benePageroutes)],
    exports: [RouterModule]
})


export class wmBenePageRoutingModule { }