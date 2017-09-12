import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import { User } from '../user';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    all() {
        return this.http.get('http://staging.tangent.tngnt.co/api/employee', this.jwt()).map((response: Response) => response.json());
    }

    byid(id: number) {
        return this.http.get('%url' + id, this.jwt()).map((response: Response) => response.json());
    }

    me() {
        return this.http.get('http://staging.tangent.tngnt.co/api/user/me', this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            let headers = new Headers({
                'Content-Type': 'application/json'
            });
            headers.append('Authorization', 'Token ' + currentUser.token);
            return new RequestOptions({ headers: headers });
        }
    }
}
