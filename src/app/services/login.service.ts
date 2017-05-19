import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

import Config from '../config/config'

@Injectable()
export class LoginService {

    constructor (private http: Http) {}

    login (user, password) {
        return this.http.post(Config.serviceUrl + '/login', {user, password});
    }

    logout (user, password) {
        return this.http.post(Config.serviceUrl + '/logout', {user, password});
    }
}