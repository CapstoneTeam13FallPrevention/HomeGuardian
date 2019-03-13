import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule, Router } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { AuthService } from '../services/user/auth.service';

import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';



import { TherapistLoginPage } from './therapist-login.page';

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
    RouterModule.forChild(routes)
  ],
  declarations: [TherapistLoginPage]
})
export class TherapistLoginPageModule {
  loginForm: FormGroup;
  loading: HTMLIonLoadingElement;

  constructor(
    public loadingCtrl: LoadingController,
    public alertCtrl: AlertController,
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
    ) {
    this.loginForm = this.formBuilder.group({
    email: ['',
    Validators.compose([Validators.required, Validators.email])],
    password: [
    '',
    Validators.compose([Validators.required, Validators.minLength(6)]),
    ],
    });
    }

    async loginUser(loginForm: FormGroup): Promise<void> {
      if (!loginForm.valid) {
      console.log('Form is not valid yet, current value:', loginForm.value);
      } else {
        this.loading = await this.loadingCtrl.create();
        await this.loading.present();
        const email = loginForm.value.email;
        const password = loginForm.value.password;
        this.authService.loginUser(email, password).then(
        () => {
        this.loading.dismiss().then(() => {
        this.router.navigateByUrl('home');
        });
        },
        error => {
        this.loading.dismiss().then(async () => {
        const alert = await this.alertCtrl.create({
        message: error.message,
        buttons: [{ text: 'Ok', role: 'cancel' }],
        });
        await alert.present();
        });
        }
        );
        }
      }

}


