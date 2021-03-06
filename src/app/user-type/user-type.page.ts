import { Component, OnInit } from '@angular/core';
import{ActivatedRoute,Params} from  '@angular/router';//获取路由传参用到
import{ HttpClient} from '@angular/common/http';
import { Router, Navigation } from '@angular/router';
import {Storage} from '@ionic/storage';


@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.page.html',
  styleUrls: ['./user-type.page.scss'],

})
export class UserTypePage implements OnInit {

  code:String;
  area:String;
  therapist:String;
  username:String;
  name:String;
  password:String;
  date:String;
  constructor(private activateInfo:ActivatedRoute,public router: Router,public http:HttpClient,public storage: Storage) {
    activateInfo.queryParams.subscribe(queryParams => {
      this. code = queryParams.code;
      this.area = queryParams.area;
      this.therapist = queryParams.therapist;
      this.username = queryParams.username;
      this.name = queryParams.name;
      this.password = queryParams.password;
      this.date = queryParams.date;
    })

   
      
   
  
      var timestamp1:any = Date.parse(Date()); 
      
      var data = {code:this.code,area:this.area,therapist:this.therapist,
        username:this.username,name:this.name,password:this.password,date:this.date,id:timestamp1};
        this.storage.set('data', JSON.stringify(data));


    }

  ngOnInit() {
    this.http
    .get("https://angular-http-guide.firebaseio.com/courses.json")
    .subscribe(
        (val) =>{
            
        },
        response =>{
           
        },
        ()=>{

        }
    );
   
  }

}
