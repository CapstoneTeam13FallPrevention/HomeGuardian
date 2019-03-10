import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientInfoSurveyPage } from './patient-info-survey.page';

const routes: Routes = [
  {
    path: '',
    component: PatientInfoSurveyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientInfoSurveyPage]
})
export class PatientInfoSurveyPageModule {}
