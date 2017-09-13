import { inject, tick, TestBed, getTestBed, async, fakeAsync, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs/Rx';

import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';
import { AlertComponent } from '../_directives/alert.component';

let comp: AlertComponent;
let fixture: ComponentFixture<AlertComponent>;
let srv: AlertService;

describe('AlertService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AlertService],
            declarations: [
                AlertComponent
            ]
        }).compileComponents()
            .then(() => {
                fixture = TestBed.createComponent(AlertComponent);
                comp = fixture.componentInstance;
                srv = fixture.debugElement.injector.get(AlertService);
            });
    }));

    it('should be created', inject([AlertService], (service: AlertService) => {
        expect(service).toBeTruthy();
    }));

    it('should have success', inject([AlertService], (service: AlertService) => {

        let test = { type: "success", message: "Success message" },
            spy = spyOn(srv, "getMessage").and.returnValue(Observable.of(test));

        service.success("this is a success");

        comp.ngOnInit();
        fixture.detectChanges();

        expect(comp.message).toEqual(test);
        expect(spy.calls.any()).toBe(true);
    }));

    it('should have failure', inject([AlertService], (service: AlertService) => {

        let test = { type: "error", message: "Error message" },
            spy = spyOn(srv, "getMessage").and.returnValue(Observable.of(test));

        service.error("this is an error");

        comp.ngOnInit();
        fixture.detectChanges();

        expect(comp.message).toEqual(test);
        expect(spy.calls.any()).toBe(true);
    }));
});
