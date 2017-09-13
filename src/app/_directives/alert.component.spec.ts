import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { AlertComponent } from './alert.component';

import { AlertService } from '../_services/alert.service';


describe('AlertComponent', () => {
    let fixture: ComponentFixture<AlertComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AlertService]
        }).compileComponents();
    }));

    it('should create an instance', inject([AlertService], (service: AlertService) => {
        let component = new AlertComponent(service);
        expect(component).toBeTruthy();
    }));

    it('should have called ngOnInit', inject([AlertService], (service: AlertService) => {
        let component = new AlertComponent(service);
        spyOn(component, "ngOnInit").and.callThrough();
        component.ngOnInit();
        expect(component.ngOnInit).toHaveBeenCalled();
    }));
});
