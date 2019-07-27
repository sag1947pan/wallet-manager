import { Component, OnInit, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, Validators } from '@angular/forms';

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
  

  public invocingInfoGroup: FormGroup = new FormGroup(
    {
    

      invoicingFrequency: new FormControl("", [Validators.required]),
      invoiceGenerationDay: new FormControl("",[Validators.required]),
      paymentDues: new FormControl("",[Validators.required]),
      invoicefavouring:new FormControl("", [Validators.required] ),
      lastinvoicefavouringName: new FormControl("",[Validators.required]),
      mailInvoice: new FormControl("",[Validators.required]),
      invoiceAddress: new FormControl("",[Validators.required])
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
