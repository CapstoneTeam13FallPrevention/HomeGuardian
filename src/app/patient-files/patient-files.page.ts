import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-files',
  templateUrl: './patient-files.page.html',
  styleUrls: ['./patient-files.page.scss'],
})
export class PatientFilesPage implements OnInit {



  constructor() {}
  ngOnInit(){
  }





    customActionSheetOptionsPatient: any = {
      header: 'Patient',
      subHeader: 'Select one of your Patients'
    }
}