import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TherapistPhotoEditorPage } from './therapist-photo-editor.page';

describe('TherapistPhotoEditorPage', () => {
  let component: TherapistPhotoEditorPage;
  let fixture: ComponentFixture<TherapistPhotoEditorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TherapistPhotoEditorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TherapistPhotoEditorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
