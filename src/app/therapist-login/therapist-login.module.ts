import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';


import { TherapistLoginPage } from './therapist-login.page';

import { AngularFireAuth } from '@angular/fire/auth';
import { FirebaseUIModule } from 'firebaseui-angular';




const routes: Routes = [
  {
    path: '',
    component: TherapistLoginPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    FirebaseUIModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TherapistLoginPage]
})
export class TherapistLoginPageModule {
  constructor(public afAuth: AngularFireAuth,) {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }
}


