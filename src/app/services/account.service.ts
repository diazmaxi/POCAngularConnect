import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http'

import Config from '../config/config'

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountService {

    constructor (private http: Http){}

    getAccountTransactions (request: AccountTransactionsRequest): Observable<Response> {
        return this.http.post(Config.serviceUrl + '/recentTransactions', request.json())
                        .map(res => res.json())
                        .map(res => res.tciblastntxnsrecentliststype[0].gtciblastntxnsrecentlistsdetailType.mtciblastntxnsrecentlistsdetailType)
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

export class AccountTransactionsRequest {
    accountId;
    numberOfTransactions;
    userAction;
    inStartDate;
    inEndDate;
    user;

    constructor ({user, accountId, numberOfTransactions, userAction, inStartDate = '', inEndDate = ''}) {
        this.user = user;
        this.accountId = accountId;
        this.numberOfTransactions = numberOfTransactions;
        this.userAction = userAction;
        this.inStartDate = inStartDate;
        this.inEndDate = inEndDate;
    }

    json() {
        return {
            user: this.user,
            accountId: this.accountId,
            numberOfTransactions: this.numberOfTransactions,
            userAction: this.userAction,
            inStartDate: this.inStartDate,
            inEndDate: this.inEndDate
        }
    }
}