import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

@Injectable()
export class UserService {

    constructor(private http: Http) { }

    all() {
        return this.http.get('http://staging.tangent.tngnt.co/api/employee', this.jwt()).map((response: Response) => response.json());
    }

    byid(id: number) {
        return this.http.get('http://staging.tangent.tngnt.co/api/employee/' + id, this.jwt()).map((response: Response) => response.json());
    }

    me() {
        return this.http.get('http://staging.tangent.tngnt.co/api/user/me', this.jwt()).map((response: Response) => response.json());
    }

    private jwt() {
        let auth = JSON.parse(localStorage.getItem('authentication'));
        if (auth && auth.token) {
            let headers = new Headers({
                'Content-Type': 'application/json'
            });
            headers.append('Authorization', 'Token ' + auth.token);
            return new RequestOptions({ headers: headers });
        }
    }
}
