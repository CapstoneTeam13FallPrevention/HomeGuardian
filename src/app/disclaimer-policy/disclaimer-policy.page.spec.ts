import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisclaimerPolicyPage } from './disclaimer-policy.page';

describe('DisclaimerPolicyPage', () => {
  let component: DisclaimerPolicyPage;
  let fixture: ComponentFixture<DisclaimerPolicyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisclaimerPolicyPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisclaimerPolicyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
