import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { WmUserServices } from 'src/app/services/wmuser.services';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';
import { ErrorMessages } from 'src/app/resources/error.messages';
import { SessionUserData } from 'src/app/model/sessionData.model';
import { bankmasterdetails } from 'src/app/model/searchData.model';
import { from } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './search.component.html',
    //styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
    SearchGroup: FormGroup;
    submitted = false;
    Status: string;
    errorMessage: string;
    resourcesLoaded: boolean;
    userRole:string;
    private banksInfo : bankmasterdetails[] = []; //Users Info to bind to UI 
    constructor(
        private formBuilder: FormBuilder,
        private wmUserServices: WmUserServices,
        private router: Router, ) { }

    ngOnInit() {
        this.SearchGroup = this.formBuilder.group({
            bankName: [''],
            bankID: [''],
            //showSuccessAlert: [''],
        });
    }

    get f() { return this.SearchGroup.controls; }


    onSubmit() {
        // debugger;
        if (this.SearchGroup.invalid) {
            this.errorMessage = "Username or Password can not be empty";
            return;
        }
        this.resourcesLoaded = true;
        this.submitted = true;
        
        this.wmUserServices.getBankMasterDetails(JSON.stringify(this.SearchGroup.value))
        .subscribe((data )=> {
                    /*let item = JSON.parse(sessionStorage.getItem("userData")) as SessionUserData;               
                    this.userRole = item.role;
                    console.log("bank search results.." + data);
                    data = JSON.stringify(data.body);
                    console.log("bank search results.string." + data);
                    this.banksInfo = JSON.parse(data).bankmasterdetails;//data;
                    this.resourcesLoaded = false;
                    console.log("bank search results model.." + this.banksInfo);*/
                    if(data != null && (data.status == 200 || data.status == 201)){
                        
                        data = JSON.stringify(data.body);
                        this.banksInfo = JSON.parse(data).bankmasterdetails;
                        console.log("bank search results.string." + this.banksInfo.length);
                    }else{
                        // status meggae with no user records.. but this should not be the case
                    }
                },
                error => {
                    console.log("failure class" + error);
                    let errorStatus = error.status;
                    if (errorStatus == '401') {
                        this.errorMessage = ErrorMessages.LOGIN_401;
                        this.resourcesLoaded = false;
                        //  errorMessage = `status: ${error.status},Message: ${ErrorMessages.LOGIN_401}`;                        
                    } else if (errorStatus == '500') {
                        this.errorMessage = ErrorMessages.LOGIN_500;
                        this.resourcesLoaded = false;
                    } else {
                        this.errorMessage = "Validation error";
                        this.resourcesLoaded = false;
                    }
                    //window.alert(errorMessage);

                    //this.message = "Please enter valid username/password"
                   // this.WalletService.isUserLoggedIn = false;                    
                });
    }

    RegisterInfo() {

        this.router.navigate(['/CustReg']);
    }
    ForgotPasswordPage() {
        this.router.navigate(['/ForgotPwd']);

    }
}

export function emailValidator(control: FormControl): { [key: string]: any } {
    var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return { invalidEmail: true };
    }
}