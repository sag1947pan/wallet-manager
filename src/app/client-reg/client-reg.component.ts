import { Component, OnInit, ElementRef  } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router, Params } from '@angular/router';
import { first } from 'rxjs/operators';
import { AppConstantsComponent } from 'src/app/app-constants/app-constants.component';
import { WalletService } from 'src/app/wallet.service';

@Component({
  selector: 'app-client-reg',
  templateUrl: './client-reg.component.html',
  styleUrls: ['./client-reg.component.css']
})
export class ClientRegComponent implements OnInit {
    clientRegisterForm: FormGroup;
    clientRegisterForm2: FormGroup;
    submitted = false;
    Submitted2 = false;
    error: any;
    Status: string;
    CustomerCode; string;
    SuccessMessage: string;
    Tab1Validated = false;
    Det1= true;
    Det2= false;

    public companyNameMsg = AppConstantsComponent.companyNameMsg;
    public BuildingMsg = AppConstantsComponent.BuildingMsg;
    public AddressLineMsg = AppConstantsComponent.AddressLineMsg;
    public TownMsg = AppConstantsComponent.TownMsg;
    public StateMsg = AppConstantsComponent.StateMsg;
    public CountryMsg = AppConstantsComponent.CountryMsg;
    public PostCodeMsg = AppConstantsComponent.PostCodeMsg;
    public FullNameMsg = AppConstantsComponent.FullNameMsg;
    public RoleMsg = AppConstantsComponent.RoleMsg;
    public EmailReqMsg = AppConstantsComponent.EmailReqMsg;
    public EmailValidMsg = AppConstantsComponent.EmailValidMsg;
    public ContactNumMsg = AppConstantsComponent.ContactNumMsg;
    public SecurityQuesMsg = AppConstantsComponent.SecurityQuesMsg;
    public SecuirtyAnsMsg = AppConstantsComponent.SecurityQuesMsg;

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private elRef: ElementRef,
        private WalletService: WalletService,
    ) { }

    ngOnInit() {
        this.clientRegisterForm = this.formBuilder.group({
            companyName: ['', Validators.required],
            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            companyRegNumber: [''],
            webSiteAddress: [''],
            contactNumber: [''],
            yourDeskNumber: [''],
            Password:[''],
        });
        this.clientRegisterForm2 = this.formBuilder.group({
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

    }

    get f() { return this.clientRegisterForm.controls; }
    get f2() { return this.clientRegisterForm2.controls; }

    onSubmit() {
        debugger;
        this.submitted = true;
        if (this.clientRegisterForm.invalid) {
            return;
        }
        else {
            this.Tab1Validated = true;
            this.Det1 = false;
            this.Det2 = true;
        }
        
    }

    onSubmitTab2() {
        debugger;
        this.Submitted2 = true;
        if (this.clientRegisterForm2.invalid) {
            return;
        }
        else {
            this.WalletService.customerRegService(JSON.stringify(this.clientRegisterForm.value))
                .pipe(first())
                .subscribe(data => {
                    this.Status = data.Status;
                    this.CustomerCode = data.CustomerCode;
                    this.SuccessMessage = data.SuccessMessage;
                    this.router.navigate(['/ClientReg2']);
                    alert("Your Customer Id is :" + (this.CustomerCode));
                }, error => (this.error = error));
        }

    }

    addressChecked(e) {
        debugger
        if (e.target.checked) {
            this.clientRegisterForm2.patchValue({
                RegRoadNo: this.clientRegisterForm2.value.RoadNo,
                RegaddressLine1: this.clientRegisterForm2.value.addressLine1,
                RegaddressLine2: this.clientRegisterForm2.value.addressLine2,
                RegtownCityName: this.clientRegisterForm2.value.townCityName,
                RegstateCountryName: this.clientRegisterForm2.value.stateCountryName,
                RegcountryName: this.clientRegisterForm2.value.countryName,
                RegpostCode: this.clientRegisterForm2.value.postCode,
            })
        }
        else {
            this.clientRegisterForm2.patchValue({
                RegRoadNo: '',
                RegaddressLine1:'',
                RegaddressLine2: '',
                RegtownCityName: '',
                RegstateCountryName: '',
                RegcountryName: '',
                RegpostCode: '',
            })
        }
    }
    tab1clk() {
        this.Det1 = true;
        this.Det2 = false;
    }
    tab2clk() {
        this.Det1 = false;
        this.Det2 = true;
    }
}
