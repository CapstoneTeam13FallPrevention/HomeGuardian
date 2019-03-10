import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoSurveyPage } from './patient-info-survey.page';

describe('PatientInfoSurveyPage', () => {
  let component: PatientInfoSurveyPage;
  let fixture: ComponentFixture<PatientInfoSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoSurveyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
