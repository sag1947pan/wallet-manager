import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { Router } from '@angular/router';
import { AdminUserData } from '../AdminData.model';
import { Subscription } from 'rxjs';
//import { ObservableMedia, MediaChange } from '@angular/flex-layout';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    authenticationService: AuthenticationService;

    name: string;
    compName: string;
    //NEW TEST CODE
    opened = true;
    over = 'side';
    expandHeight = '42px';
    collapseHeight = '42px';
    displayMode = 'flat';
  

    watcher: Subscription;
    //END NEW TEST CODE
    constructor(private router: Router) { }

    ngOnInit() {
        let userName = sessionStorage.getItem("userName");
        this.name = userName;

        let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
        this.compName = item.company_name;
  }

    logout() {
        // remove user from local storage to log user out
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem('userData');  

        this.router.navigate(["/Login"]);
    }

}
