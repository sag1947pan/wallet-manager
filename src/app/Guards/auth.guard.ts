import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthenticationService } from '../services/AuthenticationService';

//import { AuthenticationService } from '../_services';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        //const currentUser = this.authenticationService.isLoggedIn;
        //if (currentUser) {
        //    // check if route is restricted by role
        //    if (route.data.roles && route.data.roles.indexOf(currentUser.role) === -1) {
        //        // role not authorised so redirect to home page
        //        this.router.navigate(['/']);
        //        return false;
        //    }

        if (this.authenticationService.isLoggedIn()) {
            // authorised so return true
            return true;
        }
        else {

            // not logged in so redirect to login page with the return url
            this.router.navigate(['/Login']);
            return false;
        }
    }
}