import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientInfoGalleryPage } from './patient-info-gallery.page';

const routes: Routes = [
  {
    path: '',
    component: PatientInfoGalleryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientInfoGalleryPage]
})
export class PatientInfoGalleryPageModule {}
