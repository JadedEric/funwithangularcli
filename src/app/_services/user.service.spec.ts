import { Http, HttpModule, XHRBackend, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';

import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';

import { User } from '../user';

import { UserService } from './user.service';

describe('UserService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                MockBackend,
                BaseRequestOptions,
                UserService,
                {
                    provide: Http,
                    useFactory: (backend, options) => {
                        return new Http(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }]
        });
    });

    it('should be created', inject([UserService], (service: UserService) => {
        expect(service).toBeTruthy();
    }));

    it('should retrieve a collection of users', async(inject([UserService, MockBackend], (service: UserService, backend: MockBackend) => {
        let users = [
            {

            },
            {

            }
        ];

        backend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(users)
            })))
        });

        service.all().subscribe((resp) => {
            expect(resp.length).toBe(2);
        });
    })));
});
