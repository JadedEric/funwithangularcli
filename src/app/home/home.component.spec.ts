import { Http, HttpModule, XHRBackend, ResponseOptions, Response, BaseRequestOptions } from '@angular/http';
import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { MockBackend } from '@angular/http/testing';
import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { UserService } from '../_services/user.service';

import { RouterTestingModule } from '@angular/router/testing';
import { DebugElement } from "@angular/core/core";

describe('HomeComponent', () => {
    let component: HomeComponent;
    let fixture: ComponentFixture<HomeComponent>;
    let mockRouter: any;
    let debugElement: DebugElement;
    let element: any;

    class MockRouter {
        navigate = jasmine.createSpy('navigate');
    }

    beforeEach(async(() => {
        mockRouter = new MockRouter();
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            declarations: [HomeComponent],
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
                }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(HomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        debugElement = fixture.debugElement;
        element = debugElement.nativeElement;
    });

    afterEach(() => {
        document.body.removeChild(element);
    })

    it('should create home component', async(inject([UserService], (service: UserService) => {
        expect(component).toBeTruthy();
    })));

    it('should call the \'me\' method', async(inject([UserService], (service: UserService) => {
        let spy = spyOn(service, 'me').and.callThrough();
        component.ngOnInit();
        expect(spy.calls.any()).toBe(true);
    })));

    it('should call the \'all\' method', async(inject([UserService], (service: UserService) => {
        let spy = spyOn(service, 'all').and.callThrough();
        component.ngOnInit();
        expect(spy.calls.any()).toBe(true);
    })));
});
