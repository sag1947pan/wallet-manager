import { Component, OnInit } from '@angular/core';
import { AdminUserData } from 'src/app/AdminData.model';
import { AuthenticationService } from 'src/app/services/AuthenticationService';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wm-home',
  templateUrl: './wm-home.component.html',
  styleUrls: ['./wm-home.component.css']
})
export class WmHomeComponent implements OnInit {
  authenticationService: AuthenticationService;
  name: string;
    compName: string;

  constructor(private router: Router) { }

  ngOnInit() {
    let item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
        this.compName = item.company_name;
        this.name = item.user_name;     
  }

  logout() {
    // remove user from session storage to log user out
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem('userData');  

    this.router.navigate(["/Login"]);
}

}
