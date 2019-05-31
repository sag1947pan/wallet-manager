import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})


/*
    This class being used to invoke all backend operation for all custmoer User Profile data.
*/

export class CustUserDetails {

    constructor(private http: HttpClient
       ) { }

    //Get Users Summary

    GetUserProfile() {
        return this.http.get<any>('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customerUserDetails', {
            params: new HttpParams()
                .set('Access-Control-Allow-Origin', '*')
                .set('userName', 'kartheek1@test.com')
                .set('customerId', '100000000'),
            observe: 'response'
        }).pipe(
            map((res: any) => {
            if (res != null && res != "")
            {
                    //console.log("regResp res" + res);
                    let regResp = JSON.stringify(res);
                    //console.log("regResp regResp" + regResp);
                    let regRespParse = JSON.parse(regResp);
                    //console.log("regResp regRespParse" + regRespParse);

                    if (regRespParse.status == 200 || regRespParse.status == 201) {
                        let respBody = JSON.stringify(res.body);
                        let respParse = JSON.parse(respBody);

                        return respBody;
                       // return respParse;
                    }
                    else { // If no proper response
                        console.log("In failure");
                        return regRespParse.status;
                    }
                } else {
                    console.log("regResp res" + res);
                    return "Something went wrong, please try again!!";
                }
            })
        );
    }

    //GetUserProfile() {
    //    return this.http.get('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customerUserDetails', {
    //        params: new HttpParams()
    //            .set('Access-Control-Allow-Origin', '*')
    //            .set('userName', 'kartheek1@test.com')
    //            .set('customerId', '100000000'),
    //        observe: 'response'
    //    });
    //}

}
