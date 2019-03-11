import { Component, OnInit } from '@angular/core';
import {Todo,TodoService} from './../services/todo.service';

@Component({
  selector: 'app-patient-files',
  templateUrl: './patient-files.page.html',
  styleUrls: ['./patient-files.page.scss'],
})
export class PatientFilesPage implements OnInit {
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

    customActionSheetOptionsPatient: any = {
      header: 'Patient',
      subHeader: 'Select one of your Patients'
    }
}