import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/wallet.service';
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
        public dialog: MatDialog,
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
            
             this.usersInfo = JSON.parse(data).users; // as UsersDetails[];   //Can I dot his way
             
             console.log(this.usersInfo);

            
         
               
           }, error => (this.error = error));

    }

    //this is to capture the deleted rows
    deleteRow(userID){
        console.log("deleted row.."+userID);
        for(let i = 0; i < this.usersInfo.length; ++i){
            console.log("deleted row.id."+this.usersInfo[i].user_id);
            if (this.usersInfo[i].user_id === userID) {
                console.log("deleted row.in if."+userID);
                this.deletedRows.push(userID);
                this.usersInfo.splice(i,1); 
                console.log("deleted array length.."+this.deletedRows.length);               
            }
        }
    }

    //This is to confirm the delete the user info in backend
    deleteSave(){
        console.log("commiting delete"+this.deletedRows.length);
        if(this.deletedRows.length && this.deletedRows.length >0){
            const message = `Do you want to delete users info?`;

            const dialogData = new ConfirmDialogModel("Confirm Action", message);
        
            const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            maxWidth: "400px",
            data: dialogData
            });
        
            dialogRef.afterClosed().subscribe(dialogResult => {
                this.result = dialogResult;
                console.log("action resuy.."+this.result);
                if(this.result){
                    console.log("trueee.."+this.result);
                }else{
                    console.log("falsee.."+this.result);
                }
            });
        }
    }

}
