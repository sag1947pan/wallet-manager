import { Component, OnInit, forwardRef } from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forex-currencies',
  templateUrl: './forex-currencies.component.html',
  styleUrls: ['./forex-currencies.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ForexCurrenciesComponent),
      multi: true
    }
  ]
})
export class ForexCurrenciesComponent implements OnInit, ControlValueAccessor {


  public forexCurrenciesGroup: FormGroup = new FormGroup(
    {
    

     
  });
  constructor() { }

  ngOnInit() {
  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.forexCurrenciesGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.forexCurrenciesGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.forexCurrenciesGroup.disable() : this.forexCurrenciesGroup.enable();
  }


}
