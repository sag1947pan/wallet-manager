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

    logout() {
        sessionStorage.removeItem("userName");
        this.myRoute.navigate(["Login"]);
    }
}