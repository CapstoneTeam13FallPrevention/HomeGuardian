import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TherapistPhotoEditorPage } from './therapist-photo-editor.page';

const routes: Routes = [
  {
    path: '',
    component: TherapistPhotoEditorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TherapistPhotoEditorPage]
})
export class TherapistPhotoEditorPageModule {}
