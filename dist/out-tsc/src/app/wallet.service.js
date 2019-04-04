import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
var WalletService = /** @class */ (function () {
    function WalletService(http) {
        this.http = http;
    }
    WalletService.prototype.customerRegService = function (RegDetails) {
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', RegDetails, {
        // headers
        });
    };
    WalletService.prototype.customerLogin = function (customerId, password) {
        return this.http.post('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', { customerId: customerId, password: password })
            .pipe(map(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
            return user;
        }));
    };
    WalletService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], WalletService);
    return WalletService;
}());
export { WalletService };
//# sourceMappingURL=wallet.service.js.map