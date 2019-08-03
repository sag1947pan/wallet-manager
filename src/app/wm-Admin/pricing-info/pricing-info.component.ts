import { Component, OnInit, forwardRef, ViewChild } from '@angular/core';
import { SubscriptionDetails } from '../wm-bank-setup/pricingSubscriptionModel';
import { SubscriptionPackageDetails } from '../wm-bank-setup/subscriptionPackageModel';
import { PayAsYouGo } from '../wm-bank-setup/payaYouGoModel';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-pricing-info',
  templateUrl: './pricing-info.component.html',
  styleUrls: ['./pricing-info.component.css'],

  providers:[
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PricingInfoComponent),
      multi: true
    }
  ]
})
export class PricingInfoComponent implements OnInit, ControlValueAccessor {

  @ViewChild('agGrid') agGrid: AgGridAngular;

  //private components;
  //private rowData;
  private editType;

  private pricingSubscriptionInfo: SubscriptionDetails[] = [


    { subscriptionInfo: 'License Fees', currency: 'GBP', amount: 200000, validTime: 'One Time', discount: '' },
    { subscriptionInfo: 'AMC/Support Fees', currency: 'GBP', amount: 200000, validTime: 'Yearly', discount: '' },
    { subscriptionInfo: 'One Time Client Setup Charges', currency: 'GBP', amount: 10000, validTime: 'One Time', discount: '' },
  ]; 
  
  //Subsription Package Details
  private subscriptionPkgInfo: SubscriptionPackageDetails[] = [   

    { package: 'Package 1', noOfTransactions: '0 - 10000', chargesperMonth: 'GBP 4000' },
    { package: 'Package 2', noOfTransactions: '10001 - 50000', chargesperMonth: 'GBP 15000' },
    { package: 'Package 3', noOfTransactions: '50001 - 100001', chargesperMonth: 'GBP 50000' },
    { package: 'Package 4', noOfTransactions: '200001+', chargesperMonth: 'GBP 100000' },
    { package: 'Custom', noOfTransactions: '_________', chargesperMonth: '________' },
  ]; 

  //Pay As You Go Details

  private payasYouPkg: PayAsYouGo[] = [
    //private payasYouPkgRows [
    { noOfTransactions: '0 - 10000', chargesperTransaction: 'GBP 0.5' },
    { noOfTransactions: '10001 - 50000', chargesperTransaction: 'GBP 0.4', },
    { noOfTransactions: '50001 - 100001', chargesperTransaction: 'GBP 0.35', },
    { noOfTransactions: '200001 - 500000', chargesperTransaction: 'GBP 0.3', },
    { noOfTransactions: '500000 - 1000000', chargesperTransaction: 'GBP 0.25', },
    { noOfTransactions: '1000001+', chargesperTransaction: 'GBP 0.2', },
    
  ]; 

  //Pay As You Go Column definition
  PayasyougoColDefs = [
    {headerName: 'No Of Transactions', field: 'noOfTransactions', sortable: true, filter: true, checkboxSelection: true,},
    {headerName: 'Charges Per Transaction', field: 'chargesperTransaction', sortable: true, filter: true },
    
];

//Subscription Package Columns
subsPackageColDefs = [

  {headerName: 'Subscription Package', field: 'package', sortable: true, filter: true, checkboxSelection: true,},
  {headerName: 'No Of Transactions', field: 'noOfTransactions', sortable: true, filter: true, editable:true },
  {headerName: 'Charges Per Month', field: 'chargesperMonth', sortable: true, filter: true, editable:true },
  
];

//Fixed Pricing Column definition
columnDefs = [
  {headerName: 'Subscription Info', field: 'subscriptionInfo', sortable: true, filter: true,  checkboxSelection: true, },
  {headerName: 'Currency', field: 'currency', sortable: true, filter: true },
  {headerName: 'Amount', field: 'amount', sortable: true, filter: true, editable:true},
  {headerName: 'Time Period', field: 'validTime', sortable: true, filter: true},
  {headerName: 'Discount', field: 'discount', sortable: true, filter: true}
];

rowData = [
  { subscriptionInfo: 'License Fees', currency: 'GBP', amount: 200000, validTime: 'One Time', discount: '' },
  { subscriptionInfo: 'AMC/Support Fees', currency: 'GBP', amount: 200000, validTime: 'Yearly', discount: '' },
  { subscriptionInfo: 'One Time Client Setup Charges', currency: 'GBP', amount: 10000, validTime: 'One Time', discount: '' },
];



public pricingInfoGroup: FormGroup = new FormGroup(
  { 

    options: new FormControl(""),
   
});
  constructor() {

   // this.components = { numericCellEditor: this.getNumericCellEditor() };
  // this.editType = "fullRow";
   }

  ngOnInit() {  
  }

  getSelectedRows() { // Need to check on how to get the selected rows.
    const selectedNodes = this.agGrid.rowData.getSelectedNodes();
    const selectedData = selectedNodes.map( node => node.data );
    const selectedDataStringPresentation = selectedData.map( node => node.make + ' ' + node.model).join(', ');
    alert(`Selected nodes: ${selectedDataStringPresentation}`);
    console.log(selectedDataStringPresentation);
}

//  getNumericCellEditor() {
//   function isCharNumeric(charStr) {
//     return !!/\d/.test(charStr);
//   }
//   function isKeyPressedNumeric(event) {
//     var charCode = getCharCodeFromEvent(event);
//     var charStr = String.fromCharCode(charCode);
//     return isCharNumeric(charStr);
//   }
//   function getCharCodeFromEvent(event) {
//     event = event || window.event;
//     return typeof event.which === "undefined" ? event.keyCode : event.which;
//   }
//   function NumericCellEditor() {}
//   NumericCellEditor.prototype.init = function(params) {
//     this.focusAfterAttached = params.cellStartedEdit;
//     this.eInput = document.createElement("input");
//     this.eInput.style.width = "100%";
//     this.eInput.style.height = "100%";
//     this.eInput.value = isCharNumeric(params.charPress) ? params.charPress : params.value;
//     var that = this;
//     this.eInput.addEventListener("keypress", function(event) {
//       if (!isKeyPressedNumeric(event)) {
//         that.eInput.focus();
//         if (event.preventDefault) event.preventDefault();
//       }
//     });
//   };
//   NumericCellEditor.prototype.getGui = function() {
//     return this.eInput;
//   };
//   NumericCellEditor.prototype.afterGuiAttached = function() {
//     if (this.focusAfterAttached) {
//       this.eInput.focus();
//       this.eInput.select();
//     }
//   };
//   NumericCellEditor.prototype.isCancelBeforeStart = function() {
//     return this.cancelBeforeStart;
//   };
//   NumericCellEditor.prototype.isCancelAfterEnd = function() {};
//   NumericCellEditor.prototype.getValue = function() {
//     return this.eInput.value;
//   };
//   NumericCellEditor.prototype.focusIn = function() {
//     var eInput = this.getGui();
//     eInput.focus();
//     eInput.select();
//     console.log("NumericCellEditor.focusIn()");
//   };
//   NumericCellEditor.prototype.focusOut = function() {
//     console.log("NumericCellEditor.focusOut()");
//   };
//   return NumericCellEditor;
// }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => {};

  writeValue(val: any): void {
    val && this.pricingInfoGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {
   
    this.pricingInfoGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.pricingInfoGroup.disable() : this.pricingInfoGroup.enable();
  }


}
