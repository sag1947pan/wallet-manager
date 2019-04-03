import { Component, OnInit, ElementRef  } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
    submitted = false;

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
            RoadNo: ['', Validators.required],
            addressLine1: ['', Validators.required],
            townCityName: ['', Validators.required],
            stateCountryName: ['', Validators.required],
            countryName: ['', Validators.required],
            postCode: ['', Validators.required],
            yourName: ['', Validators.required],
            role: ['', Validators.required],
            yourContactNumber: ['', Validators.required],
            formPostCode: ['', Validators.required],
            securityQuestion: ['', Validators.required],
            securityAnswer: ['', Validators.required],
            yourEmailAddress: ['', [Validators.required, Validators.email]],
            companyRegNumber: [''],
            webSiteAddress: [''],
            addressLine2: [''],
            RegRoadNo: [''],
            RegaddressLine1: [''],
            RegaddressLine2: [''],
            RegtownCityName: [''],
            RegstateCountryName: [''],
            RegcountryName: [''],
            RegpostCode: [''],
            contactNumber: [''],
            yourDeskNumber: [''],
        });

    }

    get f() { return this.clientRegisterForm.controls; }

    onSubmit() {
        debugger;
        this.submitted = true;
      
        this.WalletService.AdEnquiryForm(JSON.stringify(this.clientRegisterForm.value))
            .pipe(first())
            .subscribe(data => {
                //alert(data);
                this.router.navigate(['/ClientReg2']);
                
            });
    }

    addressChecked(e) {
        debugger
        if (e.target.checked) {
            this.clientRegisterForm.patchValue({
                RegRoadNo: this.clientRegisterForm.value.RoadNo,
                RegaddressLine1: this.clientRegisterForm.value.addressLine1,
                RegaddressLine2: this.clientRegisterForm.value.addressLine2,
                RegtownCityName: this.clientRegisterForm.value.townCityName,
                RegstateCountryName: this.clientRegisterForm.value.stateCountryName,
                RegcountryName: this.clientRegisterForm.value.countryName,
                RegpostCode: this.clientRegisterForm.value.postCode,
            })
        }
        else {
            this.clientRegisterForm.patchValue({
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
    
}
