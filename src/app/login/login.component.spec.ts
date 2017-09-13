import { Http, HttpModule, XHRBackend, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { UserService } from '../_services/user.service';
import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from "@angular/core/core";

import { AlertService, AuthenticationService } from '../_services/index';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let mockRouter: any;
    let debugElement: DebugElement;
    let element: any;

    class MockRouter {
        navigate = jasmine.createSpy('navigate');
    }

    beforeEach(async(() => {
        mockRouter = new MockRouter();
        TestBed.configureTestingModule({
            imports: [RouterTestingModule, FormsModule],
            declarations: [LoginComponent],
            providers: [
                AuthenticationService,
                AlertService,
                MockBackend,
                BaseRequestOptions,
                UserService,
                {
                    provide: Http,
                    useFactory: (backend, options) => {
                        return new Http(backend, options);
                    },
                    deps: [MockBackend, BaseRequestOptions]
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        debugElement = fixture.debugElement;
        element = debugElement.nativeElement;
    });

    afterEach(() => {
        document.body.removeChild(element);
    })

    it('should create login component', async(inject([UserService], (service: UserService) => {
        expect(component).toBeTruthy();
    })));

    it('should be able to login', async(inject([UserService], (service: UserService) => {
        component.model = {
            username: "pravin.gordhan",
            password: "pravin.gordhan",
            remember: false
        };

        component.login();
    })));
});
