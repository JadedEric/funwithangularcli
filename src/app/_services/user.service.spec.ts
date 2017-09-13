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

    it('should retrieve currently logged in user\'s detail', async(inject([UserService, MockBackend], (service: UserService, backend: MockBackend) => {
        let me = {
            email: 'user@somewhere.com',
            first_name: 'User',
            id: 12,
            is_active: true,
            is_staff: true,
            is_superuser: false,
            last_name: 'Person',
            username: 'user.person'
        };

        backend.connections.subscribe((connection) => {
            connection.mockRespond(new Response(new ResponseOptions({
                body: JSON.stringify(me)
            })))
        });

        service.all().subscribe((resp) => {
            expect(resp.id).toBe(12);
            expect(resp.username).toBe('user.person');
        });
    })));
});
