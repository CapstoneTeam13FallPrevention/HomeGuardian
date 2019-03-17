import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CameraControlPage } from './camera-control.page';

describe('CameraControlPage', () => {
  let component: CameraControlPage;
  let fixture: ComponentFixture<CameraControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameraControlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CameraControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
