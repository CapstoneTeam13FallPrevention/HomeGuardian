import { Component, OnInit } from '@angular/core';
import {Todo,TodoService} from './../services/todo.service';
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.page.html',
  styleUrls: ['./patient-login.page.scss'],
})
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



    customActionSheetOptionsClinic: any = {
      header: 'Clinic',
      subHeader: 'Select your Clinic'
    }

    customActionSheetOptionsTherapist: any = {
      header: 'Therapist',
      subHeader: 'Select your Therapist'
    }
}
