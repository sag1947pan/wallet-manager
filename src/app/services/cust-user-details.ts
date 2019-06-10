import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError, retry } from 'rxjs/operators';
import { AdminUserData } from 'src/app/client-Acc-Page/AdminData.model';
import { PARAMETERS } from '@angular/core/src/util/decorators';
import { resolve } from 'url';

@Injectable({
    providedIn: 'root'
})


/*
    This class being used to invoke all backend operation for all custmoer User Profile data.
*/

export class CustUserDetails {
    private  item = JSON.parse(sessionStorage.getItem("userData")) as AdminUserData;
    private  custId = this.item.cust_id;
    private logUserEmail = sessionStorage.getItem("userName");
    constructor(private http: HttpClient
       ) { }

    /*
        This is to retrieve user summary details
        This provides details of a specfic user
    */

    GetUserProfile() {
        return this.http.get<any>('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customerUserDetails', {
            params: new HttpParams()
                .set('Access-Control-Allow-Origin', '*')
                .set('userName', this.logUserEmail)
                .set('customerId', this.custId.toString()),
            observe: 'response'
        }).pipe(
            map((res: any) => {
            if (res != null && res != ""){
                   let regResp = JSON.stringify(res);
                   let regRespParse = JSON.parse(regResp);
                   
                    if (regRespParse.status == 200 || regRespParse.status == 201) {
                        let respBody = JSON.stringify(res.body);
                        let respParse = JSON.parse(respBody);

                        return respBody;
                    }else { // If no proper response
                        return regRespParse.status;
                    }
                } else {
                    console.log("regResp res" + res);
                    return "Something went wrong, please try again!!";
                }
            })
        );
    }

    /* 
    This is to add a new user for respective ORG
    Only Admin able to add user details 
    Input: FirstName, LastName, MiddleName, Email and Phone number
    Output: Request status as Success or Failure
    */
    addUserDetails(userInfo) {
        let reqJSON = {};
        if(userInfo && userInfo != null && userInfo != ''){
            userInfo = JSON.parse(userInfo);
            reqJSON = {"userId":userInfo.userId,"firstName":userInfo.firstName,"middleName":userInfo.middleName,"lastName":userInfo.lastName,"role":userInfo.role,"mobileNum":userInfo.mobileNum};
        }else{
           // return "inValid Request";
           return;
        }
        console.log("reqJson is..."+JSON.stringify(reqJSON));
        return this.http.post<any>('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customer-users', JSON.stringify(reqJSON), {
            params: new HttpParams()
                .set('Access-Control-Allow-Origin', '*')
                .set('userName', this.logUserEmail)
                .set('customerId', this.custId.toString()),
            observe: 'response'
        }).pipe(
            map((res: any) => {
                console.log("response.." + JSON.stringify(res));
                res['playload'] = res;
                return res['playload'];
            })
        );
    }

    /*
        This is retrieve users details
        This provides number of ROLES and members in an ORG
        Provides ROLE NUMBER    
    */
   GetUsersSummary() {
       
    return this.http.get<any>('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customerUsersSummary', {
        params: new HttpParams()
            .set('Access-Control-Allow-Origin', '*')
            .set('userName', this.logUserEmail)
            .set('customerId', this.custId.toString()),
        observe: 'response'
        }).pipe(
            map((res: any) => {
                if (res != null && res != "") {
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

/*
    This is retrieve users details
    This provides list of users exists in an ORG
    Provides users Name, Email and Role    
*/
    GetUsersDetails() {
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type':  'application/json',
            //'Authorization': 'my-auth-token'
            })
        };
   
        return this.http.get<any>('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customerUsersDetails', {
            params: new HttpParams()
                .set('Access-Control-Allow-Origin', '*')            
                .set('userName', this.logUserEmail)
                .set('customerId', this.custId.toString()),
            observe: 'response'
        }).pipe(
            map((res: any) => {
            if (res != null && res != "")
            {
                    //console.log("regResp res" + res);
                    let regResp = JSON.stringify(res);
                    //console.log("regResp regResp" + regResp);
                    let regRespParse = JSON.parse(regResp);
                    console.log("regResp status" + regRespParse.status);

                    if (regRespParse.status == 200 || regRespParse.status == 201) {
                        let respBody = JSON.stringify(res.body);
                        let respParse = JSON.parse(respBody);

                        //return respBody;
                        return res;
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

    /* 
    This is to add a new user for respective ORG
    Only Admin able to add user details 
    Input: FirstName, LastName, MiddleName, Email and Phone number
    Output: Request status as Success or Failure
    */
    deleteUser(userID) {
        let reqJSON = {};
        if(userID && userID != null && userID != ''){
            //userInfo = JSON.parse(userInfo);
            //reqJSON = {"userId":userInfo.userId,"firstName":userInfo.firstName,"middleName":userInfo.middleName,"lastName":userInfo.lastName,"role":userInfo.role,"mobileNum":userInfo.mobileNum};
        }else{
        // return "inValid Request";
        return;
        }
        console.log("reqJson is..."+JSON.stringify(reqJSON));
        let httpParams = new HttpParams();
        httpParams.set('Access-Control-Allow-Origin', '*');
        httpParams.set('userName', this.logUserEmail);
        httpParams.set('customerId', this.custId.toString());
        
        let options = { params: httpParams };
        let headers = new HttpHeaders({ 'Content-Type': 'application/JSON' });

        /*return this.http.delete('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customer-users', options)
            .map((res: any) => {
                console.log("response.." + JSON.stringify(res));
                res['playload'] = res;
                return res['playload'];
            })*/
        return this.http.delete('https://ofq4d24gv7.execute-api.eu-west-2.amazonaws.com/dev/customer-users', { headers: headers, params: httpParams })
        .subscribe((res) =>{
            console.log("delete response.."+res);
            
        },err =>{
            console.log("delete response failure.."+err);
            //resolve(res);
        });
    }

}
