import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, FormGroup, FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forex-currencies',
  templateUrl: './forex-currencies.component.html',
  styleUrls: ['./forex-currencies.component.css'],
  providers: [
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
      options: new FormControl(""),
    });
    currShow = true;
    currencies = new FormControl();
    selectedAll: any;
    //currenciesList: string[] = ['AUD', 'USD', 'GBP', 'SGD', 'INR', 'EUR', 'AFN',
    //'AMD',
    //'AZN',
    //'BHD',
    //'BDT',
    //'BTN',
    //'BND',
    //'KHR',
    //'CNY',
    //];
    currenciesList: any[] = [
        { currency: 'AUD' }, { currency: 'USD' }, { currency: 'GBP' }, { currency: 'SGD' }, { currency: 'INR' }, { currency: 'EUR' }, { currency: 'AFN' }, { currency: 'AMD' }, { currency: 'AZN' }, { currency: 'BHD' }, { currency: 'BDT' },
        { currency: 'BTN' }, { currency: 'BND' }, { currency: 'KHR' }, { currency: 'CNY' }
    ];

  constructor() { }

    ngOnInit() {
  }

    onRadioChange(event) {
        debugger
        if (event.value == true) {
            this.currShow = true;
        }
        else {
            this.currShow = false;
            this.currenciesList.forEach(x => x.state = false);
        }
    }

    isAllChecked() {
        return this.currenciesList.every(_ => _.state);
    }
    checkAll(ev) {
        this.currenciesList.forEach(x => x.state = ev.checked);
    }
    
  //ControlValueAccessor Implementation
  public onTouched: () => void = () => { };

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
