import { Component, OnInit, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, Validators } from '@angular/forms';
import { ValidationService } from 'src/app/validations/validation.service';

@Component({
  selector: 'app-invoice-data',
  templateUrl: './invoice-data.component.html',
  styleUrls: ['./invoice-data.component.css'],

  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InvoiceDataComponent),
      multi: true
    }
  ]
})
export class InvoiceDataComponent implements OnInit, ControlValueAccessor {
  formBuilder: any;
  
  Invoices: string[] = ['Monthly', 'Quarterly', 'Half-Yearly', 'Yearly'];
  invoice = 'Monthly';

  public invocingInfoGroup: FormGroup = new FormGroup(
    {
    

      invoicingFrequency: new FormControl("", []),
      invoiceGenerationDay: new FormControl("",[]),
      paymentDues: new FormControl("",[]),
      invoicefavouring:new FormControl("", [] ),
      lastinvoicefavouringName: new FormControl("",[]),
      mailInvoice: new FormControl("",[Validators.compose([Validators.required, ValidationService.emailValidator])]),
      invoiceAddress: new FormControl("",[])
  });

  constructor() { }

  ngOnInit() {

     
  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.invocingInfoGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
   
    this.invocingInfoGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
   
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.invocingInfoGroup.disable() : this.invocingInfoGroup.enable();
  }


}
