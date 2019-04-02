import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { clientreg } from 'src/app/client-reg/client-reg';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

    constructor(private http: HttpClient) { }



    AdEnquiryForm(enquirydet): Observable<clientreg> {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        
        return this.http.post<clientreg>('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', enquirydet, {
           // headers
        })
    }


}
