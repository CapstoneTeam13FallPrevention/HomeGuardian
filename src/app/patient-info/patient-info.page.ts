import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, Navigation } from '@angular/router';
import{ActivatedRoute,Params} from  '@angular/router';//获取路由传参用到


@Component({
  selector: 'app-patient-info',
  templateUrl: './patient-info.page.html',
  styleUrls: ['./patient-info.page.scss'],
})
export class PatientInfoPage implements OnInit {
  code:String;
  area:String;
  therapist:String;
 
 
  constructor(private activateInfo:ActivatedRoute,public router: Router) {
    activateInfo.queryParams.subscribe(queryParams => {
      this. code = queryParams.code;
      this.area = queryParams.area;
      this.therapist = queryParams.therapist;

    })





  }

    ngOnInit(){
      
     }
  login(form:NgForm){



   console.log(form.value);
   var username = form.value.username;
   var name = form.value.name;
   var password = form.value.password;
   var date = form.value.date;
     
    this.router.navigate(['/user-type'], {
      queryParams: {
      code: this.code,
      area: this.area,
      therapist:this.therapist,
      username:username,
      name:name,
      password:password,
      date:date
      
      }
    })



  }

}
