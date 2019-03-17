import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { DisclaimerPolicyPage } from './disclaimer-policy.page';

const routes: Routes = [
  {
    path: '',
    component: DisclaimerPolicyPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DisclaimerPolicyPage]
})
export class DisclaimerPolicyPageModule {}
