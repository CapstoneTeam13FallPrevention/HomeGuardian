import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-therapist-login',
  templateUrl: './therapist-login.page.html',
  styleUrls: ['./therapist-login.page.scss'],
})
export class TherapistLoginPage implements OnInit {

  constructor() { }

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