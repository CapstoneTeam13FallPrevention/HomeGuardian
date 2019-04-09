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
  { path: 'camera-control', loadChildren: './camera-control/camera-control.module#CameraControlPageModule' },
  { path: 'user-type', loadChildren: './user-type/user-type.module#UserTypePageModule' },
  { path: 'control-panel', loadChildren: './control-panel/control-panel.module#ControlPanelPageModule' },
  { path: 'patient-files', loadChildren: './patient-files/patient-files.module#PatientFilesPageModule' },
  { path: 'patient-info-selector', loadChildren: './patient-info-selector/patient-info-selector.module#PatientInfoSelectorPageModule' },
  { path: 'patient-info-survey', loadChildren: './patient-info-survey/patient-info-survey.module#PatientInfoSurveyPageModule' },
  { path: 'patient-info-gallery', loadChildren: './patient-info-gallery/patient-info-gallery.module#PatientInfoGalleryPageModule' },
  { path: 'therapist-photo-editor', loadChildren: './therapist-photo-editor/therapist-photo-editor.module#TherapistPhotoEditorPageModule' },
  { path: 'therapist-detail', loadChildren: './therapist-detail/therapist-detail.module#TherapistDetailPageModule' },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
