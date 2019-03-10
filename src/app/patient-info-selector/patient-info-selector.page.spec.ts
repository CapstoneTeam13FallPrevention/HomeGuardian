import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientInfoSelectorPage } from './patient-info-selector.page';

describe('PatientInfoSelectorPage', () => {
  let component: PatientInfoSelectorPage;
  let fixture: ComponentFixture<PatientInfoSelectorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientInfoSelectorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientInfoSelectorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
