import { Component, OnInit, Input } from '@angular/core';

import { FormBuilder, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CustUserDetails } from 'src/app/services/cust-user-details';
import { first } from 'rxjs/operators';
import { MyDetailsInfo } from './MyDetailsInfo';

@Component({
    selector: 'app-mydetails',
    templateUrl: './mydetails.component.html',
    styleUrls: ['./mydetails.component.css']
})
export class MydetailsComponent implements OnInit {

    mydetailsGroup: FormGroup;

    @Input() editable: boolean = false;
    error: any;
    success: boolean
    resourcesLoaded :boolean
    private mydetailsInfo: MyDetailsInfo = new MyDetailsInfo();

    options: string[] = ['United Kingdom Pounds', 'Singapore Dollars', 'Indian Rupees'];

    Industries: string[] = ['Retail', 'Technology', 'Manufacturing', 'Insurance', 'Public Sector', 'Charity / Trust', 'Transportation / Logistics'];

    Roles: string[] = ['Admin', 'Operator', 'Authoriser'];
    PaymentTypes: string[] = ['Salary Payments', 'Vendor/ Supplier Payments', 'Rewards/prizes', 'Reimbursements'];
    Countries: string[] = ['India', 'USA', 'UK', 'Singapore', 'Australia'];
    Currencies: string[] = ['INR', 'USD', 'GBP', 'SGD', 'AUD'];
    CardTypes: string[] = ['Master Card', 'Visa', 'Amex'];

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private custUserDetails: CustUserDetails) {

        this.mydetailsGroup = this.formBuilder.group({
            //  name: ['', ''],
            first_name: ['', ''],
            middle_name: ['', ''],
            last_name: ['', ''],
            role: ['', ''],
            //   myEmail: ['', ''],
            mobile_num: ['', ''],
            desk_num: ['', ''],

        });
    }


    ngOnInit() {

       this.resourcesLoaded = true;

        this.custUserDetails.GetUserProfile()
            .pipe(first())
            .subscribe((res) => {

                const tempData = JSON.parse(res);
                this.mydetailsInfo = tempData;

                this.resourcesLoaded = false;

                //console.log("Ranjith Test data" + res);

                //  this.mydetailsInfo = res;



                //this.mydetailsInfo.first_name = res.first_name


                // console.log("My Name is " + this.mydetailsInfo.first_name);


            });

    }

}
