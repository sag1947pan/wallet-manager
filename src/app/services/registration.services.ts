import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';

//import HttpErrorResponse
@Injectable({
  providedIn: 'root'
})

/*
    This class being used to invoke all backend operation for all registration actvities
*/
export class RegistrationServices {

    public isUserLoggedIn: boolean;
    constructor(private http: HttpClient) { }
/*
    This is being used in Customer Registration
    Input Payload: JSON with customer details
        Loaded the data in MySQL through LAMBDA
    Output: Success or failure response
*/
    customerRegService(RegDetails) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        
        return this.http.post<any>('https://jwetj5otq1.execute-api.eu-west-2.amazonaws.com/dev/customer', RegDetails, {
        // headers
        }).pipe( 
            map((res: any) => {
                console.log("Initial registration..."+JSON.stringify(res));
                let regResp = JSON.stringify(res);
                if(res !=null && res != ""){
                    let regResp = JSON.stringify(res);
                    let regRespParse = JSON.parse(regResp)
                    if(regRespParse.status == 201){
                        console.log("In success");
                        //return regRespParse.Message; 
                        return regResp;
                    }else{
                        console.log("In failure");
                        //return regRespParse.Message;
                        return regResp;
                    }
                }else{
                    return "Something went wrong, please try again!!";
                }
                res['playload'] = res;
                return res['playload'];
            }),
            catchError((err, caught) => {
                //return empty();
                console.log("registration failed.."+err);
                //return err;
                return throwError(err);
            })
        );
    }

    /*
    This is being used in Customer LOG-IN --should levearage to yse BENE Log-IN as well
    Input Payload: JSON with customer username/pwd
        Loaded the data in MySQL through LAMBDA
    Output: Success or failure response along with customer ID and details
    */
    customerLogin(customerId: string, password: string) {
       // return this.http.get<any>('https://8fpjsh9zha.execute-api.eu-west-2.amazonaws.com/DEV/validatecustuser', { 
        return this.http.get<any>('https://q16xwpzug9.execute-api.eu-west-2.amazonaws.com/dev/validateUser',{
            params: new HttpParams()
            .set('Access-Control-Allow-Origin','*')
            .set('userName', customerId)
            .set('password', password),
            observe: 'response'
        }).pipe( 
            catchError((err, caught) => {
                console.log("login failed.."+err.status);
                return throwError(err);
            })
        );
    }
}
