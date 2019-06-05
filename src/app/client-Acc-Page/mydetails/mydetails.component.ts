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

    // mydetailsGroup: FormGroup;
    mydetailsGroup = new FormGroup({
        myEmail: new FormControl()
    });


    @Input() editable: boolean = false;
    error: any;
    success: boolean
    resourcesLoaded: boolean
    private mydetailsInfo: MyDetailsInfo = new MyDetailsInfo();

    constructor(private formBuilder: FormBuilder,
        private router: Router,
        private custUserDetails: CustUserDetails) {

        this.mydetailsGroup = this.formBuilder.group({

            first_name: ['', ''],
            middle_name: ['', ''],
            last_name: ['', ''],
            role: ['', ''],
            myEmail: ['', ''],
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

                this.GetEmail(); //Try to get email from session storage as it is not present in API response.

                this.resourcesLoaded = false;

            });
    }

    GetEmail() {
        let myItem = sessionStorage.getItem("userName");     

        this.mydetailsInfo.myEmail = myItem;
    }

}
