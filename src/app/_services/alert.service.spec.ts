import { TestBed, inject, async, ComponentFixture } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RouterTestingModule } from '@angular/router/testing';

import { AlertService } from './alert.service';

describe('AlertService', () => {
    let fixture: ComponentFixture<AlertService>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [RouterTestingModule],
            providers: [AlertService]
        }).compileComponents();
    }));

  it('should be created', inject([AlertService], (service: AlertService) => {
    expect(service).toBeTruthy();
  }));

  it('should have success', inject([AlertService], (service: AlertService) => {
      service.success("hello");
      spyOn(service, "getMessage").and.callThrough();
      service.getMessage().subscribe((msg) => {
          expect(msg).toBe("hello");
      });
  }));
});
