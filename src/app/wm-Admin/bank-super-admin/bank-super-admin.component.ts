import { Component, OnInit, forwardRef } from '@angular/core';
import { DynamicGrid } from '../wm-bank-setup/superAdmin.model';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-super-admin',
  templateUrl: './bank-super-admin.component.html',
  styleUrls: ['./bank-super-admin.component.css'],
  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => BankSuperAdminComponent),
      multi: true
    }
  ]
})
export class BankSuperAdminComponent implements OnInit, ControlValueAccessor  {

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};

  public bankSuperAdminGroup: FormGroup = new FormGroup(
    {
    

      email: new FormControl("", [Validators.required]),
      firstName: new FormControl("",[Validators.required]),
      middleName: new FormControl("",[Validators.required]),
      lastName: new FormControl("",[Validators.required]),
      role: new FormControl("",[Validators.required])
  });

  constructor() { }

  ngOnInit() {

    this.newDynamic = { email: "", firstName: "", middleName: "", lastName: "", role: "" };
    this.dynamicArray.push(this.newDynamic);
  }


  addRow(index) {
    this.dynamicArray.push(this.newDynamic);
    this.newDynamic = { email: "", firstName: "", middleName: "", lastName: "", role: "" };
    this.dynamicArray.push(this.newDynamic);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {

      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      return true;
    }
  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.bankSuperAdminGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
    console.log("on change");
    this.bankSuperAdminGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    console.log("on blur");
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.bankSuperAdminGroup.disable() : this.bankSuperAdminGroup.enable();
  }


}
