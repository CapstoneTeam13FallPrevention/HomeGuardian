import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import {Todo,TodoService} from './../services/todo.service';
=======

>>>>>>> parent of dbadf1a... patientinformationCollection Firebase
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.page.html',
  styleUrls: ['./patient-login.page.scss'],
})
<<<<<<< HEAD







export class PatientLoginPage implements OnInit {
todos:Todo[];


  constructor(private todoService:TodoService) {}
  ngOnInit(){

  this.todoService.getTodos().subscribe(res =>{
      this.todos = res;
    });

  }



remove(item)
  {
  this.todoService.removeTodo(item.id);
    }
=======
export class PatientLoginPage implements OnInit {

  constructor() { }
>>>>>>> parent of dbadf1a... patientinformationCollection Firebase



    customActionSheetOptionsClinic: any = {
      header: 'Clinic',
      subHeader: 'Select your Clinic'
    }

    customActionSheetOptionsTherapist: any = {
      header: 'Therapist',
      subHeader: 'Select your Therapist'
    }
}
