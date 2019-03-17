import { Component, OnInit } from '@angular/core';
import {Todo,TodoService} from './../services/todo.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.page.html',
  styleUrls: ['./patient-login.page.scss'],
})



export class PatientLoginPage implements OnInit {
todos:Todo[];
 area:String = "UAMS"
 therapist:String = "Thep1"

   constructor(private todoService:TodoService, public router: Router,public nav:NavController) {

   }



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

    login(form: NgForm) {
     var code = form.value.accesscode;
     console.log(code)
     
  //  this.router.navigateByUrl('/patient-info?code'+ code + '&area=' + this.area + '&therapist='+ this.therapist);

  this.router.navigate(['/patient-info'], {
    queryParams: {
      code: code,
      area: this.area,
      therapist:this.therapist
    }
})
    }
   
}
