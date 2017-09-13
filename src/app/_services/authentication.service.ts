import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { login } from '../login';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    login(login: login) {
        return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', login).map((response: Response) => {
            let auth = response.json();

            if (auth && auth.token) {
                localStorage.setItem('authentication', JSON.stringify(auth));
            }
        });
    }

    logout() {
        localStorage.removeItem('authentication');
    }
}
