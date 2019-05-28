import { Component, OnInit } from '@angular/core';
import { WalletService } from '../wallet.service';

@Component({
    selector: 'app-wallet-header',
    templateUrl: './wallet-header.component.html',
    styleUrls: ['./wallet-header.component.css']
})
export class WalletHeaderComponent implements OnInit {

    loggedInflag: boolean;
    constructor(private walletService: WalletService) { }

    ngOnInit() {
        this.loggedInflag = this.walletService.isUserLoggedIn;
    }

}
