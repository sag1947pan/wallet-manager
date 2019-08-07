import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-bene-address',
  templateUrl: './bene-address.component.html',
  styleUrls: ['./bene-address.component.css']
})
export class BeneAddressComponent implements OnInit {
    submitted = false;
    Status: string;
    SuccessMessage: string;
    error: any;
    step = 0;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router, ) { }

    //Adding different forms under one main form
    public beneProfileGroup: FormGroup = new FormGroup({
        beneAddress: new FormControl(""),

    });
  ngOnInit() {
  }
    setStep(index: number) {
        this.step = index;
    }

    nextStep() {
        this.step++;
    }

    prevStep() {
        this.step--;
    } 
}
