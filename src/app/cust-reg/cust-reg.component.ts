import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { Router } from '@angular/router';
import { WalletService } from 'src/app/wallet.service';
import { RegistrationServices } from 'src/app/services/registration.services';
import { first } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { DialogComponent } from '../dialog/dialog.component';
import {Constants} from 'src/app/resources/constants.services';

@Component({
    selector: 'app-cust-reg',
    templateUrl: './cust-reg.component.html',
    styleUrls: ['./cust-reg.component.css']
})
export class CustRegComponent implements OnInit {
    regGroup: FormGroup;
    compInfoGroup: FormGroup;
    personalInfoGroup: FormGroup;
    tradingAddressGroup: FormGroup;
    securityInfoGroup: FormGroup;
    submitted = false;
    Submitted2 = false;
    error: any;
    Status: string;
    CustomerCode; string;
    SuccessMessage: string;
     dialogRef: MatDialogRef<DialogComponent>;
    // formTemplate:Any = form_template;
   // templateUrl:any;

    securityquestion = new FormControl();

   // options: string[] = ['Please select Question 1', 'Please select Question 2', 'Please select Question 3'];
   options: string[] = Constants.SECURITY_QUESTIONS;
   countryList: string[] = Constants.COUNTRY_LIST;
    step = 0;

    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    }

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private WalletService: WalletService,
        private RegistrationServices: RegistrationServices,
        public dialog: MatDialog, ) { }

    ngOnInit() {
        this.regGroup = this.registerFields();/*this.formBuilder.group({
            companyName: [undefined, Validators.required],
            companyRegNumber: [undefined],
            companyLocation:[undefined, Validators.required],

            userFirstName: [undefined, Validators.required],
            userMiddleName: [undefined],
            userLastName: [undefined, Validators.required],

            role: [undefined, Validators.required],
            yourEmailAddress: [undefined, [Validators.required, Validators.email]],
            yourContactNumber: [undefined, Validators.required],
            userPassword: [undefined, Validators.required],
            userConfirmPassword: [undefined, Validators.required],

            securityQuestion: [undefined, Validators.required],
            securityAnswer: [undefined, Validators.required],
        })*/

       /* let group={}    
        templateUrl.forEach(input_template=>{
        group[input_template.label]=new FormControl('');  
        })
        this.regGroup = new FromGroup(group);*/
        this.compInfoGroup = this.formBuilder.group({
            companyName: ['', Validators.required],
            companyRegNumber: [undefined],
            companyLocation:['', Validators.required],

           /* userFirstName: [undefined, Validators.required],
            userMiddleName: [undefined],
            userLastName: [undefined, Validators.required],

            role: [undefined, Validators.required],
            yourEmailAddress: [undefined, [Validators.required, Validators.email]],
            yourContactNumber: [undefined, Validators.required],
            userPassword: [undefined, Validators.required],
            userConfirmPassword: [undefined, Validators.required],

            securityQuestion: [undefined, Validators.required],
            securityAnswer: [undefined, Validators.required],*/
        });

        this.personalInfoGroup = this.formBuilder.group({


            userFirstName: ['', Validators.required],
            userMiddleName: [''],
            userLastName: ['', Validators.required],
           
            //role: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            yourContactNumber: ['', Validators.required],
            userPassword: ['', Validators.required],
            userConfirmPassword: ['', Validators.required],

        });

        this.tradingAddressGroup = this.formBuilder.group({
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],
            addressLine2: [''],

            RegRoadNo: [''],
            RegaddressLine1: [''],
            RegaddressLine2: [''],
            RegtownCityName: [''],
            RegstateCountryName: [''],
            RegcountryName: [''],
            RegpostCode: [''],
        });


        this.securityInfoGroup = this.formBuilder.group({

            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],

           // Password: [''],
        });
    }

    registerFields(){
        return this.formBuilder.group({
            companyName: new FormControl(),
            companyRegNumber: new FormControl(),
            companyLocation:new FormControl(),

            userFirstName: new FormControl(),
            userMiddleName: new FormControl(),
            userLastName: new FormControl(),

            role: new FormControl(),
            yourEmailAddress: new FormControl(),
            yourContactNumber: new FormControl(),
            userPassword: new FormControl(),
            userConfirmPassword: new FormControl(),

            securityQuestion: new FormControl(),
            securityAnswer: new FormControl(),
        })
    }

    
    // on Submitting Register button
    onSubmitTradingInfo() {
        debugger;
        this.Submitted2 = true;
        if(this.personalInfoGroup.invalid || this.compInfoGroup.invalid || this.securityInfoGroup.invalid){
            console.log("not a valid request");
            this.SuccessMessage = "Please provide registration information";
            return;
        }
        console.log(this.personalInfoGroup.value);
            console.log(this.securityInfoGroup.value);
            console.log(this.compInfoGroup.value);
        //Sending attributes to back end has two ways.. below and ... function
       /* let __assign = (this && this.__assign) || Object.assign || function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
              s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                  t[p] = s[p];
              }
              return t;
          }; 
        let group;
        group.__assign(this.compInfoGroup.value,this.personalInfoGroup.value,this.securityInfoGroup.value);
           */
            
           let group = {
               ...this.compInfoGroup.value,
               ...this.personalInfoGroup.value,
               ...this.securityInfoGroup.value,
           }
            
       console.log(group);
      //  this.WalletService.customerRegService(JSON.stringify(group))
        this.RegistrationServices.customerRegService(JSON.stringify(group))
            .pipe(first())
            .subscribe(data => {
                console.log("data..."+data);
                //this.CustomerCode = data.CustomerCode;
                if(data.Status == 201){
                    this.SuccessMessage = data;
                    this.router.navigate(['/CustRegSuccess']);
                }else{
                    this.SuccessMessage = data.Message;
                }

                
               // this.router.navigate(['/ClientReg2']);
               // this.router.navigate(['/Main']);
                //alert(this.SuccessMessage);
                
            }, error => (this.error = error));

        // }

        //Once we receive a Proper JSON response mesage we will show a dialog.

        //const dialogRef = this.dialog.open(DialogComponent, {
        //    width: '250px',

        //.dialogRef = this.dialog.open(DialogComponent, { hasBackdrop: false },);
        //});      


    }

    addressChecked($event) {
        // debugger
        //  if ($event.target.checked) {
        // this.tradingAddressGroup.patchValue({
        RegRoadNo: this.tradingAddressGroup.value.RoadNo;
        RegaddressLine1: this.tradingAddressGroup.value.addressLine1;
        RegaddressLine2: this.tradingAddressGroup.value.addressLine2;
        RegtownCityName: this.tradingAddressGroup.value.townCityName;
        RegstateCountryName: this.tradingAddressGroup.value.stateCountryName;
        RegcountryName: this.tradingAddressGroup.value.countryName;
        RegpostCode: this.tradingAddressGroup.value.postCode;
        //})
        //   }
        //else {
        //    this.tradingAddressGroup.patchValue({
        //        RegRoadNo: '',
        //        RegaddressLine1: '',
        //        RegaddressLine2: '',
        //        RegtownCityName: '',
        //        RegstateCountryName: '',
        //        RegcountryName: '',
        //        RegpostCode: '',
        //    })
        //}
    }

    


}



