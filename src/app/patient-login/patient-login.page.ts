import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.page.html',
  styleUrls: ['./patient-login.page.scss'],
})







export class PatientLoginPage implements OnInit {


  constructor() {}
  ngOnInit(){

  
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
