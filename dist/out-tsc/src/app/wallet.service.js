var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
var WalletService = (function () {
    function WalletService(http) {
        this.http = http;
    }
    WalletService.prototype.customerRegService = function (RegDetails) {
        var headers = new HttpHeaders().set('content-type', 'application/json');
        return this.http.post('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', RegDetails, {});
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
    WalletService = __decorate([
        Injectable({
            providedIn: 'root'
        }), 
        __metadata('design:paramtypes', [HttpClient])
    ], WalletService);
    return WalletService;
}());
WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map