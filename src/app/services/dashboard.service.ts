import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import Config from '../config/config'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardService {

    constructor (private http: Http){}

    getAccounts (user): Observable<Response> {
        return this.http.post(Config.serviceUrl + '/account', user)
                        .map(res => res.json())
                        .map(res => {
                            if (res.status.successIndicator == 'SUCCESS') {
                                return res.tcibacctdetailstype[0].gtcibacctdetailsdetailType.mtcibacctdetailsdetailType
                            } else {
                                return {}
                            }
                        })
                        .catch(this.handleError)
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
        const body = error.json() || '';
        const err = body.error || JSON.stringify(body);
        errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
        errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}