import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'patient-login', loadChildren: './patient-login/patient-login.module#PatientLoginPageModule' },
  { path: 'patient-login', loadChildren: './patient-login/patient-login.module#PatientLoginPageModule' },
  { path: 'patient-login/:id', loadChildren: './patient-login/patient-login.module#PatientLoginPageModule' },

  { path: 'therapist-login', loadChildren: './therapist-login/therapist-login.module#TherapistLoginPageModule' },
  { path: 'patient-info', loadChildren: './patient-info/patient-info.module#PatientInfoPageModule' },
  { path: 'user-agreement', loadChildren: './user-agreement/user-agreement.module#UserAgreementPageModule' },
  { path: 'user-survey', loadChildren: './user-survey/user-survey.module#UserSurveyPageModule' },
  { path: 'disclaimer', loadChildren: './disclaimer/disclaimer.module#DisclaimerPageModule' },
  { path: 'privacy-policy', loadChildren: './privacy-policy/privacy-policy.module#PrivacyPolicyPageModule' },
  { path: 'disclaimer-policy', loadChildren: './disclaimer-policy/disclaimer-policy.module#DisclaimerPolicyPageModule' },
  { path: 'terms-and-conditions', loadChildren: './terms-and-conditions/terms-and-conditions.module#TermsAndConditionsPageModule' },
  { path: 'camera-control', loadChildren: './camera-control/camera-control.module#CameraControlPageModule' },  { path: 'user-type', loadChildren: './user-type/user-type.module#UserTypePageModule' },
  { path: 'control-panel', loadChildren: './control-panel/control-panel.module#ControlPanelPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
