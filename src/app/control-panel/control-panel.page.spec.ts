import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlPanelPage } from './control-panel.page';

describe('ControlPanelPage', () => {
  let component: ControlPanelPage;
  let fixture: ComponentFixture<ControlPanelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlPanelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlPanelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
