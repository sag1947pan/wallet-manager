import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/wallet.service';
import { CustUserDetails } from 'src/app/services/cust-user-details';
import { first } from 'rxjs/operators';
import { MatSnackBar, MatDialog  } from '@angular/material'
import {UsersDetails} from './UserInfo'
import { from } from 'rxjs';
import { ConfirmDialogModel, ConfirmDialogComponent } from 'src/app/confirm-dialog/confirm-dialog.component';

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
    private deletedRows =[];
    result: string = '';  
    private usersInfo : UsersDetails[] = []; //Users Info to bind to UI 
    
    
    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    


    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private WalletService: WalletService,
        private services : CustUserDetails,
        public dialog: MatDialog,
        private snackBar: MatSnackBar) { }

    ngOnInit() {

        this.GetUsersInformation(); //API Call        

        this.UserInfoGroup = this.formBuilder.group({

            //Add user 
            userId: ['', Validators.required],
            firstName: ['', Validators.required],
            middleName: [''],
            lastName: ['', Validators.required],
            role: ['',Validators.required],
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
            //this.WalletService.AddUser(JSON.stringify(this.UserInfoGroup.value))
            this.services.addUserDetails(JSON.stringify(this.UserInfoGroup.value))
                .pipe(first())
                .subscribe(data => {
                    this.Status = data.status;
                    console.log("add user data.."+JSON.stringify(data.body));
                    console.log("add user data.status."+this.Status);
                    if(data != null && data.status == 201){
                        data = JSON.stringify(data.body);                        
                        data = JSON.parse(data);
                        this.SuccessMessage = data.Message;
                    }else{
                        data = JSON.stringify(data.body);
                        data = JSON.parse(data);
                        this.SuccessMessage = data.Message;
                    }
                    this.snackBar.open(this.SuccessMessage , 'Done', {
                            duration: 3000,
                        });
                }, error => (this.error = error));
        }
    }

     //GET API for Users Summary
     GetUsersInformation(){

        //this.WalletService.GetUsersDetails()         
        this.services.GetUsersDetails()
           .subscribe((data )=> {
            
            if(data != null && (data.status == 200 || data.status == 201)){
                data = JSON.stringify(data.body);
                this.usersInfo = JSON.parse(data).users;
            }else{
                // status meggae with no user records.. but this should not be the case
            }
           }, error => (this.error = error));
    }

    //this is to capture the deleted rows
    /*deleteRow(userID){
        for(let i = 0; i < this.usersInfo.length; ++i){
            if (this.usersInfo[i].user_id === userID) {
                this.deletedRows.push(userID);
                this.usersInfo.splice(i,1); 
                console.log("deleted array length.."+this.deletedRows.length);               
            }
        }
    }*/

    //This is to confirm the delete the user info in backend
    deleteRow(userID){
        console.log("delte user ID.."+userID+"row length.."+this.deletedRows.length);
        if(this.usersInfo.length && this.usersInfo.length ==1){
            console.log("only one user can not be deleted");

            return;
        }else if(this.usersInfo.length >1){
            const message = `Do you want to delete users info?`;

            const dialogData = new ConfirmDialogModel("Confirm Action", message);
        
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
            });
        
            dialogRef.afterClosed().subscribe(dialogResult => {
                this.result = dialogResult;
                if(this.result){
                    console.log("trueee.."+this.result);
                    //Delete user record
                    for(let i = 0; i < this.usersInfo.length; ++i){
                        if (this.usersInfo[i].user_id === userID) {
                           // this.deletedRows.push(userID);
                            this.usersInfo.splice(i,1); 
                            console.log("deleted array length.."+this.deletedRows.length);               
                        }
                    }
                    this.services.deleteUser(userID);
                   // this.deletedRows = [];
                   /* .subscribe((data )=> {
                        
                        if(data != null && (data.status == 200 || data.status == 201)){
                            data = JSON.stringify(data.body);
                            //this.usersInfo = JSON.parse(data).users;
                        }else{
                            // status meggae with no user records.. but this should not be the case
                        }
                    }, error => (this.error = error));*/
                }else{
                    console.log("falsee.."+this.result);
                    this.deletedRows = [];
                }
            });
        }
    }

}
