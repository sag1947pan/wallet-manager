import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BankSetupServices } from 'src/app/services/bankSetup.services';
import { first, map, startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

//New code for countries List
export interface StateGroup {
  letter: string;
  names: string[];
}

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().indexOf(filterValue) === 0);
};



@Component({
  selector: 'app-bank-details',
  templateUrl: './bank-details.component.html',
  styleUrls: ['./bank-details.component.css'],

  providers: [
    {
      provide: NG_VALUE_ACCESSOR, 
      useExisting: forwardRef(() => BankDetailsComponent),
      multi: true,     
    }   
  ]
})
export class BankDetailsComponent implements OnInit, ControlValueAccessor {
  bankInfoGroup: FormGroup; 


  IsChecked: boolean;
  Options: string[] = ['Yes', 'No'];
  option = 'Yes';

  myControl = new FormControl();
  filteredOptions: Observable<string[]>;
  countriesList: string[] = [
    
'Afghanistan',
'Aland Islands',
'Albania',
'Algeria',
'American Samoa',
'Andorra',
'Angola',
'Anguilla',
'Antarctica',
'Antigua and Barbuda',
'Argentina',
'Armenia',
'Aruba',
'Australia',
'Austria',
'Azerbaijan',
'Bahamas',
'Bahrain',
'Bangladesh',
'Barbados',
'Belarus',
'Belgium',
'Belize',
'Benin',
'Bermuda',
'Bhutan',
'Bolivia, Plurinational State of',
'Bonaire, Sint Eustatius and Saba',
'Bosnia and Herzegovina',
'Botswana',
'Bouvet Island',
'Brazil',
'British Indian Ocean Territory',
'Brunei Darussalam',
'Bulgaria',
'Burkina Faso',
'Burundi',
'Cabo Verde',
'Cambodia',
'Cameroon',
'Cayman Islands',
'Central African Republic',
'Chad',
'Chile',
'China',
'Christmas Island',
'Cocos (Keeling) Islands',
'Colombia',
'Comoros',
'Congo',
'Democratic Republic of the Congo',
'Costa Rica',
//'Côte d'Ivoire',
'Croatia',
'Cuba',
'Curaçao',
'Cyprus',
'Czech Republic',
'Denmark',
'Djibouti',
'Dominica',
'Dominican Republic',
'Ecuador',
'Egypt',
'El Salvador',
'Equatorial Guinea',
'Eritrea',
'Estonia',
'Ethiopia',
'Falkland Islands (Malvinas)',
'Faroe Islands',
'Fiji',
'Finland',
'France',
'French Guiana',
'French Polynesia',
'French Southern Territories',
'Gabon',
'Gambia',
'Georgia',
'Ghana',
'Gibraltar',
'Greece',
'Greenland',
'Grenada',
'Guadeloupe',
'Guam',
'Guatemala',
'Guernsey',
'Guinea',
'Guinea-Bissau',
'Guyana',
'Haiti',
'Heard Island and McDonald Islands',
'Honduras',
'Hong Kong',
'Hungary',
'Iceland',
'India',
'Indonesia',
'Iran',
'Iraq',
'Ireland',
'Isle of Man',
'Israel',
'Italy',
'Jamaica',
'Japan',
'Jersey',
'Jordan',
'Kazakhstan',
'Kenya',
'Kiribati',
'North Korea',
'Sourth Korea',
'Kuwait',
'Kyrgyzstan',
//'Lao People's Democratic Republic'
'Latvia',
'Lebanon',
'Lesotho',
'Liberia',
'Libya',
'Liechtenstein',
'Lithuania',
'Luxembourg',
'Macao',
'Republic of Northern Macedonia,',
'Madagascar',
'Malawi',
'Malaysia',
'Maldives',
'Mali',
'Malta',
'Marshall Islands',
'Martinique',
'Mauritania',
'Mauritius',
'Mayotte',
'Mexico',
'Federated States of Micronesia',
'Republic of Moldova',
'Monaco',
'Mongolia',
'Montenegro',
'Montserrat',
'Morocco',
'Mozambique',
'Myanmar',
'Namibia',
'Nauru',
'Nepal',
'Netherlands',
'New Caledonia',
'New Zealand',
'Nicaragua',
'Niger',
'Nigeria',
'Niue',
'Norfolk Island',
'Northern Mariana Islands',
'Norway',
'Oman',
'Pakistan',
'Palau',
'State of Palestine',
'Panama',
'Papua New Guinea',
'Paraguay',
'Peru',
'Philippines',
'Pitcairn',
'Poland',
'Portugal',
'Puerto Rico',
'Qatar',
'Réunion',
'Romania',
'Russian Federation',
'Rwanda',
'Saint Barthélemy',
'Ascension and Tristan da Cunha Saint Helena',
'Saint Kitts and Nevis',
'Saint Lucia',
'Saint Martin (French part)',
'Saint Pierre and Miquelon',
'Saint Vincent and the Grenadines',
'Samoa',
'San Marino',
'Sao Tome and Principe',
'Saudi Arabia',
'Senegal',
'Serbia',
'Seychelles',
'Sierra Leone',
'Singapore',
'Sint Maarten (Dutch part)',
'Slovakia',
'Slovenia',
'Solomon Islands',
'Somalia',
'South Africa',
'South Georgia and the South Sandwich Islands',
'South Sudan',
'Spain',
'Sri Lanka',
'Sudan',
'Suriname',
'Svalbard and Jan Mayen',
'Swaziland',
'Sweden',
'Switzerland',
'Syrian Arab Republic',
'Taiwan, Province of China',
'Tajikistan',
'United Republic of Tanzania',
'Thailand',
'Timor-Leste',
'Togo',
'Tokelau',
'Tonga',
'Trinidad and Tobago',
'Tunisia',
'Turkey',
'Turkmenistan',
'Turks and Caicos Islands',
'Tuvalu',
'Uganda',
'UKraine',
'United Arab Emirates',
'United Kingdom of Great Britain and Northern Ireland',
'United States Minor Outlying Islands',
'United States of America',
'Uruguay',
'Uzbekistan',
'Vanuatu',
'Vatican City State (Holy See)',
'Bolivarian Republic of Venezuela',
'Viet Nam',
'Virgin Islands, British',
'Virgin Islands, U.S.',
'Wallis and Futuna',
'Western Sahara',
'Yemen',
'Zambia',
'Zimbabwe'

  ];


  //State Groups.
  stateGroups: StateGroup[] = [{
    letter: 'A',
    names: ['Afghanistan',
    'Aland Islands',
    'Albania',
    'Algeria',
    'American Samoa',
    'Andorra',
    'Angola',
    'Anguilla',
    'Antarctica',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Aruba',
    'Australia',
    'Austria',
    'Azerbaijan',]
  }, 
  {
    letter: 'B',
    names: ['Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bermuda',
    'Bhutan',
    'Bolivia, Plurinational State of',
    'Bonaire, Sint Eustatius and Saba',
    'Bosnia and Herzegovina',
    'Botswana',
    'Bouvet Island',
    'Brazil',
    'British Indian Ocean Territory',
    'Brunei Darussalam',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',]
  },
  {
    letter: 'C',
    names: ['Cabo Verde',
    'Cambodia',
    'Cameroon',
    'Cayman Islands',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Christmas Island',
    'Cocos (Keeling) Islands',
    'Colombia',
    'Comoros',
    'Congo',
    'Democratic Republic of the Congo',
    'Costa Rica',
    //'Côte d'Ivoire',
    'Croatia',
    'Cuba',
    'Curaçao',
    'Cyprus',
    'Czech Republic',]
  }, {
    letter: 'D',
    names: ['Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',]
  },
  {
    letter: 'E',
    names: ['Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',]
  },
  {
    letter: 'F',
    names: ['Falkland Islands (Malvinas)',
    'Faroe Islands',
    'Fiji',
    'Finland',
    'France',
    'French Guiana',
    'French Polynesia',
    'French Southern Territories',
    ]
  }, {
    letter: 'G',
    names: ['Gabon',
    'Gambia',
    'Georgia',
    'Ghana',
    'Gibraltar',
    'Greece',
    'Greenland',
    'Grenada',
    'Guadeloupe',
    'Guam',
    'Guatemala',
    'Guernsey',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',]
  }, {
    letter: 'H',
    names: ['Haiti',
    'Heard Island and McDonald Islands',
    'Honduras',
    'Hong Kong',
    'Hungary',]
  }, {
    letter: 'I',
    names: ['Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Isle of Man',
    'Israel',
    'Italy',]
  },
  {
    letter : 'J',
    names: ['Jamaica',
    'Japan',
    'Jersey',
    'Jordan',]

  },
   {
    letter: 'K',
    names: ['Kazakhstan',
    'Kenya',
    'Kiribati',
    'North Korea',
    'Sourth Korea',
    'Kuwait',
    'Kyrgyzstan',]
  }, {
    letter: 'L',
    names: ['Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',]
  }, {
    letter: 'M',
    names: ['Macao',
    'Republic of Northern Macedonia,',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Martinique',
    'Mauritania',
    'Mauritius',
    'Mayotte',
    'Mexico',
    'Monaco',
    'Mongolia',
    'Montenegro',
    'Montserrat',
    'Morocco',
    'Mozambique',
    'Myanmar',]
  }, {
    letter: 'N',
    names: ['Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Caledonia',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Niue',
    'Norfolk Island',
    'Northern Mariana Islands',
    'Norway',]
  }, {
    letter: 'O',
    names: ['Oman',]
  }, {
    letter: 'P',
    names: ['Pakistan',
    'Palau',
    'State of Palestine',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Pitcairn',
    'Poland',
    'Portugal',
    'Puerto Rico',]
  }, 
  {
    letter : 'Q',
    names: ['Qatar',]
  },
    {
    letter: 'R',
    names: ['Réunion',
    'Romania',
    'Russian Federation',
    'Rwanda',]
  }, {
    letter: 'S',
    names: ['Saint Barthélemy',
    'Ascension and Tristan da Cunha Saint Helena',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Martin (French part)',
    'Saint Pierre and Miquelon',
    'Saint Vincent and the Grenadines',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Sint Maarten (Dutch part)',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'South Georgia and the South Sandwich Islands',
    'South Sudan',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Svalbard and Jan Mayen',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syrian Arab Republic',]
  }, {
    letter: 'T',
    names: ['Taiwan, Province of China',
    'Tajikistan',
    'United Republic of Tanzania',
    'Thailand',
    'Timor-Leste',
    'Togo',
    'Tokelau',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Turks and Caicos Islands',
    'Tuvalu',]
  }, {
    letter: 'U',
    names: ['Uganda',
    'UKraine',
    'United Arab Emirates',
    'United Kingdom of Great Britain and Northern Ireland',
    'United States Minor Outlying Islands',
    'United States of America',
    'Uruguay',
    'Uzbekistan',]
  }, {
    letter: 'V',
    names: ['Vanuatu',
    'Vatican City State (Holy See)',
    'Bolivarian Republic of Venezuela',
    'Viet Nam',
    'Virgin Islands, British',
    'Virgin Islands, U.S.',]
  }, {
    letter: 'W',
    names: ['Wallis and Futuna',
    'Western Sahara',]
  },
{
  letter: 'Y',
  names:['Yemen',]
},
{
  letter: 'Z',
  names:['Zambia',
  'Zimbabwe']
}];

  stateGroupOptions: Observable<StateGroup[]>;
  stateGroup = new FormControl();

  constructor(
    private formBuilder: FormBuilder,
    private BankSetupServices:BankSetupServices,) { }

  ngOnInit() {

    this.stateGroupOptions = this.stateGroup!.valueChanges
    .pipe(
      startWith(''),
      map(value => this._filterGroup(value))
    );

    this.bankInfoGroup = this.formBuilder.group({
      
       //Bank Details
      bankId: ['', Validators.compose([Validators.required, Validators.minLength(8)])],     
      bankName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactName: ['', Validators.compose([Validators.required, Validators.minLength(0)])],
      primaryContactEmailId: ['', Validators.compose([Validators.required, Validators.email])],
      primaryContactPhoneNo: ['', Validators.compose([Validators.required, Validators.minLength(11)])],

      //Services and Preferences
      bankServiceSubscription: [''],

      servciceActivationStartDate: [''],

      serviceActivationEndDate: [''],

      supportReqforBankUserMgmt: [''],

      supportReqforClientUserMgmt: [''],

      authManualPymtActivity: [''],

      authNonPymtActivity: [''],

      
      addressLine1: [''],
      addressLine2: [''],
      cityName: ['',],
      state: ['',],
      //country: ['',],
      
      postCode: ['',],

      //Registered Address
      regAddressLine1: ['',],
      regAddressLine2: [''],
      regCity: ['',],
      regState: ['',],
      regCountry: ['',],
      regPostCode: ['',],
     
    });

    

  }

  private _filterGroup(value: string): StateGroup[] {
    if (value) {
      return this.stateGroups
        .map(group => ({letter: group.letter, names: _filter(group.names, value)}))
        .filter(group => group.names.length > 0);
    }

    return this.stateGroups;
  }

  


  showOptions(event) {
    console.log(event);

    if (event.checked) {

      this.bankInfoGroup.patchValue(
        {
          regAddressLine1: this.bankInfoGroup.value.addressLine1,
          regAddressLine2: this.bankInfoGroup.value.addressLine2,
          regCity: this.bankInfoGroup.value.cityName,
          regState: this.bankInfoGroup.value.state,
          regPostCode: this.bankInfoGroup.value.postCode,
          regCountry: this.bankInfoGroup.value.country.trim(),


        })


    }
    else {
      this.bankInfoGroup.patchValue({
        regAddressLine1: '',
        regAddressLine2: '',
        regCity: '',
        regState: '',
        regCountry: '',
        regPostCode: '',

      })

    }


    console.log(this.bankInfoGroup.value);

  }

  onSubmit() {

    console.log("payload.."+this.bankInfoGroup.value);
    //verify the fields existance and submit the request...
    this.BankSetupServices.setBankMasterInfo(this.bankInfoGroup.value)
    .pipe(first())
    .subscribe(
        data => {
          console.log("redirectd to success page"+data);
        },
        error => {
          console.log("redirectd to wmuser failure page"+error);
        });
  }

  //ControlValueAccessor Implementation
  public onTouched: () => void = () => { };

  writeValue(val: any): void {
    val && this.bankInfoGroup.setValue(val, { emitEvent: false });
  }

  registerOnChange(fn: any): void {

    this.bankInfoGroup.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {

    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    isDisabled ? this.bankInfoGroup.disable() : this.bankInfoGroup.enable();
  }

}
