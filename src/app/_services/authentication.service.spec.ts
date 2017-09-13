import { Http, HttpModule, XHRBackend, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';

import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { AuthenticationService } from './authentication.service';

import { Login } from '../login';

describe('AuthenticationService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                AuthenticationService,
                {
                    provide: Http,
                    useFactory: (backend, options) => {
                        return new Http(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }]
        });
    });

    it('should be created', inject([AuthenticationService], (service: AuthenticationService) => {
        expect(service).toBeTruthy();
    }));

    it('should successfully log in', async(inject([AuthenticationService, MockBackend], (service: AuthenticationService, backend: MockBackend) => {

        let login: Login = new Login();
        login.password = "pravin.gordhan";
        login.username = "pravin.gordhan";

        const mockResponse = {
            token: "secretkey"
        };

        backend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(mockResponse)
            })))
        });

        // test a log in, by mocking the backend call
        service.login(login).subscribe((resp) => {

            // a successful log in will produce a window.localStorage variable, called currentUser
            let ls: string = localStorage.getItem("currentUser");
            expect(ls).toBeDefined();
        });

        // test a log out
        service.logout();

        // a log out will remove the window.localStorage variable, called currentUser
        let ls: string = localStorage.getItem("currentUser");
        expect(ls).toBeNull();

    })));



});
