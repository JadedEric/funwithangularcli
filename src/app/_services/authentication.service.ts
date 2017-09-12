import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Login } from '../login';

@Injectable()
export class AuthenticationService {

    constructor(private http: Http) {
    }

    login(login: Login) {
        return this.http.post('http://staging.tangent.tngnt.co/api-token-auth/', {
            username: login.username,
            password: login.password
        }).map((response: Response) => {
            let user = response.json();

            if (user && user.token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    }

    logout() {
        localStorage.removeItem('currentUser');
    }
}
