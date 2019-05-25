import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

/*
    This class being used to invoke all backend operation for all custmoer profile update actvities
*/
export class ProfileServices {

    constructor(private http: HttpClient) { }
/*
    This is being used in Customer profile updates and retrives
    Input Payload: JSON with customer details
        Loaded the data in MySQL through LAMBDA
    Output: Success or failure response
*/
    AddUser(userInfo){
        return this.http.post<any>('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customer-users', userInfo, {
            params: new HttpParams()
                //.set('Access-Control-Allow-Origin', '*')
                .set('userName', 'veeratest1@test.com')
                .set('customerId', '100000000'),
            observe: 'response'
        }).pipe(
            map((res: any) => {
                console.log("response.." + JSON.stringify(res));
                res['playload'] = res;
                return res['playload'];
            })
        );
    }
}
