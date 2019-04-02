import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var LoginServiceService = /** @class */ (function () {
    function LoginServiceService(http) {
        this.http = http;
        getAPIData();
        {
            return this.http.get('https://jsonplaceholder.typicode.com/users');
        }
        ;
        postAPIData();
        {
            return this.http.post('/api/postData', { 'firstName': 'Code', 'lastName': 'Handbook' });
        }
        ;
    }
    LoginServiceService = tslib_1.__decorate([
        Injectable({
            providedIn: 'LoginService'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], LoginServiceService);
    return LoginServiceService;
}());
export { LoginServiceService };
//# sourceMappingURL=login-service.service.js.map