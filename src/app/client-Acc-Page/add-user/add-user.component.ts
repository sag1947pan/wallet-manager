import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/wallet.service';
import { first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material'
import {UsersDetails} from './UserInfo'
import { from } from 'rxjs';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})


export class AddUserComponent implements OnInit {
    UserInfoGroup: FormGroup;
    submitted = false;
    error: any;
    Status: string;
    CustomerCode; string;
    SuccessMessage: string;
    
    private usersInfo : UsersDetails[] = []; //Users Info to bind to UI 
  
    

    
    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    


    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private WalletService: WalletService,
        private snackBar: MatSnackBar) { }

    ngOnInit() {

        this.GetUsersInformation(); //API Call        

        this.UserInfoGroup = this.formBuilder.group({

            //Add user 
            userId: ['', Validators.required],
            firstName: ['', Validators.required],
            middleName: ['', Validators.required],
            lastName: [''],
            role: ['',],
            mobileNum: ['', Validators.required],
           // desgCtrl: ['', Validators.required],         
           
        });

      
       
    }

    get f() { return this.UserInfoGroup.controls; }

    onSubmit() {

        debugger;
        this.submitted = true;
        if (this.UserInfoGroup.invalid) {
            return;
        }
        else {
            this.WalletService.AddUser(JSON.stringify(this.UserInfoGroup.value))
                .pipe(first())
                .subscribe(data => {
                    this.Status = data.Status;
                   // this.CustomerCode = data.CustomerCode;
                    this.SuccessMessage = data.SuccessMessage;                  
                 
                    this.snackBar.open('User details added successfully' , 'Done', {
                            duration: 3000,
                        });
                }, error => (this.error = error));
        }
    }

     //GET API for Users Summary
     GetUsersInformation(){

        this.WalletService.GetUsersDetails()         
           .subscribe((data )=> {
               console.log("Ranjith Test data" + data);
               
               const tempData  = JSON.parse(data);
            
             this.usersInfo = tempData // as UsersDetails[];   //Can I dot his way
             
             console.log(tempData);

            
         
               
           }, error => (this.error = error));

    }

}
