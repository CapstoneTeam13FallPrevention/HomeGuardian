import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFilesPage } from './patient-files.page';

describe('PatientFilesPage', () => {
  let component: PatientFilesPage;
  let fixture: ComponentFixture<PatientFilesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFilesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFilesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
