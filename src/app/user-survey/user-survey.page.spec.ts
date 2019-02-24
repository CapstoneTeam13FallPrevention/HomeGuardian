import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSurveyPage } from './user-survey.page';

describe('UserSurveyPage', () => {
  let component: UserSurveyPage;
  let fixture: ComponentFixture<UserSurveyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSurveyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSurveyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
