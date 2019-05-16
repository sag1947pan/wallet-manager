import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { clientreg } from 'src/app/client-reg/client-reg';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WalletService {

    constructor(private http: HttpClient) { }



    customerRegService(RegDetails) {
    //customerRegService(customerDetails,personalDetails,secDetails) {
        const headers = new HttpHeaders().set('content-type', 'application/json');
        
        //return this.http.post<any>('https://1oxit4pdx0.execute-api.eu-west-2.amazonaws.com/dev/Customers', RegDetails, {
        //return this.http.post<any>('https://jwetj5otq1.execute-api.eu-west-2.amazonaws.com/dev/customer', customerDetails,personalDetails,secDetails {
            return this.http.post<any>('https://jwetj5otq1.execute-api.eu-west-2.amazonaws.com/dev/customer', RegDetails, {

           // headers
        }).pipe( 
            map((res: any) => {
                console.log("res.."+res);
                console.log("res.string."+JSON.stringify(res));
                if(res !=null && res != ""){
                    let regResp = JSON.stringify(res);
                    console.log("resregResp."+regResp);
                    let regRespParse = JSON.parse(regResp)
                    console.log("res.regRespParse."+regRespParse);
                    console.log("res.sttaus."+regRespParse.status);
                    if(regRespParse.status == 201){
                        console.log("In success");
                        return regRespParse.Message;    
                    }else{
                        console.log("In failure");
                        return regRespParse.Message;
                    }
                }else{
                    return "Something went wrong, please try again!!";
                }
                res['playload'] = res;
                return res['playload'];
            })
        );
    }


    customerLogin(customerId: string, password: string) {
        return this.http.get<any>('https://8fpjsh9zha.execute-api.eu-west-2.amazonaws.com/DEV/validatecustuser', { 
            params: new HttpParams()
            .set('Access-Control-Allow-Origin','*')
            .set('userName', 'myname@email.com')
            .set('password', '6745'),     
            observe: 'response'
        }).pipe( 
            map((res: any) => {
                console.log("response.."+JSON.stringify(res));
                res['playload'] = res;
                return res['playload'];
            })
        );
    }



}
