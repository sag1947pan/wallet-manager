import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { clientreg } from 'src/app/client-reg/client-reg';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

    constructor(private http: HttpClient) { }



    customerRegService(RegDetails) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        
      //  return this.http.post<any>('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', RegDetails, {
        return this.http.post<any>('https://jwetj5otq1.execute-api.eu-west-2.amazonaws.com/dev/customer', RegDetails, {
           // headers
        })
    }


    customerLogin(customerId: string, password: string) {
        return this.http.post<any>('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', { customerId: customerId, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }



}
