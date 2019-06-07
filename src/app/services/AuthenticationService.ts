import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private myRoute: Router) { }

    sendToken(token: string) {
        sessionStorage.setItem("userName", token) //Get from Session storage
    }

    getToken() {
        return sessionStorage.getItem("userName")
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    Logout() {
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem('userData');
        this.myRoute.navigate(["/Login"]);
    }
}