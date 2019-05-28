import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletHeaderComponent } from '../wallet-header/wallet-header.component';
import { WalletFooterComponent } from '../wallet-footer/wallet-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [WalletHeaderComponent, WalletFooterComponent],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [WalletHeaderComponent, WalletFooterComponent]
})
export class SharedModule { }
