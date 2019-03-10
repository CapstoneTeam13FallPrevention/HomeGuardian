import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PatientInfoSelectorPage } from './patient-info-selector.page';

const routes: Routes = [
  {
    path: '',
    component: PatientInfoSelectorPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PatientInfoSelectorPage]
})
export class PatientInfoSelectorPageModule {}
