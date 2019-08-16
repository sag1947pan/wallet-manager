import { FormControl } from '@angular/forms';
import * as moment from 'moment';

export class ValidationService {
    static getValidatorErrorMessage(validatorName: string, validatorValue?: any) {
      let config = {
        'required': 'Required',
        'invalidCreditCard': 'Is invalid credit card number',
        'invalidEmailAddress': 'Invalid email address',
        'invalidPassword': 'Invalid password. Password must be at least 6 characters long, and contain a number.',
        'minlength': `Minimum length ${validatorValue.requiredLength}`
      };
  
      return config[validatorName];
    }
  
    static creditCardValidator(control) {
      // Visa, MasterCard, American Express, Diners Club, Discover, JCB
      if (control.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/)) {
        return null;
      } else {
        return { 'invalidCreditCard': true };
      }
    }
  
    static emailValidatorOld(control) {
      // RFC 2822 compliant regex
      if (control.value.match(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/)) {
        return null;
      } else {
        return { 'invalidEmailAddress': true };
      }
    }
  
    static passwordValidator(control) {
      // {6,100}           - Assert password is between 6 and 100 characters
      // (?=.*[0-9])       - Assert a string has at least one number
      if (control.value.match(/^(?=.*[0-9])[a-zA-Z0-9!@#$%^&*]{6,100}$/)) {
        return null;
      } else {
        return { 'invalidPassword': true };
      }
    }

    static emailValidator(control: FormControl): { [key: string]: any } {
        var emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
        if (control.value && !emailRegexp.test(control.value)) {
            return { invalidEmail: true };
        }
    }

    static bicCodeValidator(control) //Need to check the regular expresion validator.
    {    
        if (control.value && !control.value.match('^([a-zA-Z]){4}([a-zA-Z]){2}([0-9a-zA-Z]){2}([0-9a-zA-Z]{3})?$')) {
          return { 'invalidbiccode': true };
        } 
    }


    /**
   * An example of custom validator on a date string.
   * Valid date is a string, which is:
   * 1, in the form of DD/MM/YYYY
   * 2, later than today
   * 3, not an invalid value like 2018-20-81
   * @param date a date string
   */
 static isMyDateFormat(date: string): string {
    if (date.length !== 10) {
      return 'Invalid input: Please input a string in the form of DD/MM/YYYY';
    } else {
      const da = date.split('-');
      if (da.length !== 3 || da[0].length !== 4 || da[1].length !== 2 || da[2].length !== 2) {
        return 'Invalid input: Please input a string in the form of DD/MM/YYYY';
      } else if (moment(date).isValid()) {
        return 'Invalid date: Please input a date no later than today';
      } else if (!moment(date).isValid()) {
        return 'Invalid date: Please input a date with a valid month and date.';
      }
    }
    return 'Unknown error.';
  }

  }
  