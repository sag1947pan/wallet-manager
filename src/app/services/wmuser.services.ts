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
export class WmUserServices {

    public isUserLoggedIn: boolean;
    constructor(private http: HttpClient) { }

    /*
    This is being used to search bank
    Input Payload: JSON customer name
    Output: Success or failure response
*/
searchCustomer(customerDetails) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    
    return this.http.post<any>('https://jwetj5otq1.execute-api.eu-west-2.amazonaws.com/dev/customer', customerDetails, {
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
Get bank master details upon WM Admin search for bank
Input: Bank Name or Bank ID
Output: Bank ID, Bank Name, Primary Contact
*/
getBankMasterDetails(RegDetails) {
    const headers = new HttpHeaders().set('content-type', 'application/json');
    RegDetails = JSON.parse(RegDetails);    
    return this.http.get<any>('https://3fgr6t3lk6.execute-api.eu-west-2.amazonaws.com/dev/bankMasterDetails', {
        params: new HttpParams()
            .set('Access-Control-Allow-Origin', '*')
            //.set('userName', this.logUserEmail)
            .set('userId', "5")
            .set('bankName', RegDetails.bankName)
            .set('bankID', RegDetails.bankID),
        observe: 'response'
    }).pipe(
        map((res: any) => {
            if (res != null && res != ""){
                let regResp = JSON.stringify(res);
                let regRespParse = JSON.parse(regResp);
                console.log("regResp status" + regRespParse.status);

                if (regRespParse.status == 200 || regRespParse.status == 201) {
                    let respBody = JSON.stringify(res.body);
                    let respParse = JSON.parse(respBody);
                    
                    return res;
                }
                else { // If no proper response
                    console.log("In failure");
                    return regRespParse.status;
                }
            } else {
                console.log("search bank response.." + res);
                return "Something went wrong, please try again!!";
            }
        })
    );
    }
}