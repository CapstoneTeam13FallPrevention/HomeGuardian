import { Component, OnInit } from '@angular/core';

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-therapist-login',
  templateUrl: './therapist-login.page.html',
  styleUrls: ['./therapist-login.page.scss'],
})
export class TherapistLoginPage implements OnInit {

  constructor(public afAuth: AngularFireAuth,) {
  }

  signOut() {
    this.afAuth.auth.signOut().then(() => {
      location.reload();
    });
  }

  ngOnInit() {
  }

  customActionSheetOptionsClinic: any = {
    header: 'Clinic',
    subHeader: 'Select your Clinic'
  }

  customActionSheetOptionsTherapist: any = {
    header: 'Therapist',
    subHeader: 'Select your Therapist'
  }


}