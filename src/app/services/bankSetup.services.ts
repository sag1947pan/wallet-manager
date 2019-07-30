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
export class BankSetupServices {

    public isUserLoggedIn: boolean;
    constructor(private http: HttpClient) { }

    /*
    This is being used to onboard bank
    Input Payload: JSON with bank master, will split into individual calls
            Loaded the data in MySQL through LAMBDA
    Output: Success or failure response
*/
bankMasterService(RegDetails) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    console.log("RegDetails of bank setup is..."+JSON.stringify(RegDetails));
    return this.http.post<any>('https://f2hj888jj4.execute-api.eu-west-2.amazonaws.com/dev/registerBank', JSON.stringify(RegDetails), {
    // headers
    params: new HttpParams()
        .set('Access-Control-Allow-Origin', '*')
                //.set('userName', this.logUserEmail) userId=5
        .set('userId', "7"),
        observe: 'response'
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
}