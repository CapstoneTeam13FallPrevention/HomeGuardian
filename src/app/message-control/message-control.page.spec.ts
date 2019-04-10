import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageControlPage } from './message-control.page';

describe('TherapistPhotoEditorPage', () => {
  let component: MessageControlPage;
  let fixture: ComponentFixture<MessageControlPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageControlPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageControlPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
