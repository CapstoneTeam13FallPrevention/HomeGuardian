import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistLoginPage } from './therapist-login.page';

describe('TherapistLoginPage', () => {
  let component: TherapistLoginPage;
  let fixture: ComponentFixture<TherapistLoginPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistLoginPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistLoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
