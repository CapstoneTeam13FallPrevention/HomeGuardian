import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-therapist-login',
  templateUrl: './therapist-login.page.html',
  styleUrls: ['./therapist-login.page.scss'],
})
export class TherapistLoginPage implements OnInit {
  clinic:String = "UAMS"

  constructor(public router: Router) { }

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
  login(form: NgForm) {
    console.log(form);
    var username = form.value.username;
    var password = form.value.password;
    var clinic = this.clinic;
    console.log(username);
    console.log(password);
    console.log(clinic);
    
   
    
 //  this.router.navigateByUrl('/patient-info?code'+ code + '&area=' + this.area + '&therapist='+ this.therapist);

//  this.router.navigate(['/patient-info'], {
//    queryParams: {
//      code: code,
//      area: this.area,
//      therapist:this.therapist
//    }
// })
   }

}