import { Component, OnInit, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR, NG_VALIDATORS, Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { BankSetupServices } from 'src/app/services/bankSetup.services';
import { first } from 'rxjs/operators';
//import { stringify } from '@angular/core/src/render3/util';
//import {STEPPER_GLOBAL_OPTIONS} from '@angular/cdk/stepper';

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
  // formBuilder: FormBuilder;
  // bankMasterGroup:FormGroup;
  // preferencesGroup:FormGroup;
  // addressGroup:FormGroup;


  IsChecked: boolean;
  Options: string[] = ['Yes', 'No'];
  option = 'Yes';

  //countri = new FormControl();
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

  constructor(
    private formBuilder: FormBuilder,
    private BankSetupServices:BankSetupServices,) { }

  ngOnInit() {

    this.bankInfoGroup = this.formBuilder.group({

      // bankMasterGroup : new FormGroup(
      //   {
    
         
      // bankId:new FormControl( ['', Validators.compose([Validators.required, Validators.minLength(8)])]),    
      // bankName:new FormControl( ['', Validators.compose([Validators.required, Validators.minLength(0)])]),
      // primaryContactName:new FormControl (['', Validators.compose([Validators.required, Validators.minLength(0)])]),
      // primaryContactEmailId:new FormControl( ['', Validators.compose([Validators.required, Validators.email])]),
      // primaryContactPhoneNo:new FormControl (['', Validators.compose([Validators.required, Validators.minLength(11)])])

    
    
      //   }),

     

      // preferencesGroup :new FormGroup({
       
      //   bankServiceSubscription: new FormControl(""),

      //   servciceActivationStartDate: new FormControl(""),
  
      //   serviceActivationEndDate: new FormControl(""),
  
      //   supportReqforBankUserMgmt: new FormControl(""),
  
      //   supportReqforClientUserMgmt: new FormControl(""),
  
      //   authManualPymtActivity: new FormControl(""),
  
      //   authNonPymtActivity: new FormControl(""),

      // }),

      


      // addressGroup:new FormGroup({

      //   addressLine1:new FormControl(""),
      // addressLine2: new FormControl(""),
      // cityName: new FormControl(""),
      // state: new FormControl(""),
      // country: new FormControl(""),
      // postCode: new FormControl(""),

      // //Registered Address
      // regAddressLine1: new FormControl(""),
      // regAddressLine2: new FormControl(""),
      // regCity: new FormControl(""),
      // regState: new FormControl(""),
      // regCountry: new FormControl(""),
      // regPostCode: new FormControl(""),


      // })

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
      country: ['',],
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
