import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientLoginPage } from './patient-login.page';

describe('PatientLoginPage', () => {
  let component: PatientLoginPage;
  let fixture: ComponentFixture<PatientLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
