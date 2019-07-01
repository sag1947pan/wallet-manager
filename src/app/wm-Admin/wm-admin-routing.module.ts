import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WmHomeComponent } from './wm-home/wm-home.component';

import { AuthGuard } from '../Guards/auth.guard';


const wmAdminPageroutes: Routes = [
    { path: '', redirectTo: '/wmAdminPage/wmHome', pathMatch: 'full' },
    {
        path: 'wmHome', component: WmHomeComponent, canActivate: [AuthGuard]
    }
];

@NgModule({
    imports: [RouterModule.forChild(wmAdminPageroutes)],
  exports: [RouterModule]
})


export class wmadminPageRoutingModule { }