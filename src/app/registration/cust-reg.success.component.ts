import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule, FormGroup, Validators, FormControl } from '@angular/forms';
import { WalletService } from 'src/app/wallet.service';
import { MatFormFieldModule, MatInputModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { getLocaleDayNames } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './cust-reg.success.component.html',
  styleUrls: ['./registration.component.css']
})

export class SuccessRegComponent implements OnInit {
    ngOnInit() {
        
    }
}