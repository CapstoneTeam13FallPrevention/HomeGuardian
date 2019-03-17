import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { HttpClient ,HttpParams,HttpHeaders} from '@angular/common/http';
import { Storage } from '@ionic/storage';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  
})

export class HomePage {

  constructor(public navCtrl: NavController,private http: HttpClient,private storage: Storage) {
  
  }
  onSignup() {
  
    var code:any = this.storage.get('code');
    this.storage.get('data').then((value)=>{
      var data = JSON.parse(value);

      const params = new HttpParams()
      .set('code', data.code)
      .set('area', data.area)
      .set('therapist', data.therapist)
      .set('username', data.username)
      .set('name', data.name)
      .set('password', data.password)
      .set('date', data.date)
      .set('imageName',"eeee").set('dateId',data.id);
this.http
      .post("http://localhost:8888/160063D_php/uploaddata.php",params)
      .subscribe(
        (res) =>{
          console.log(res);
          if (res['success']) {
           
           
            console.log("真正成功了")
           
          }else{
           
          }
    },
    response =>{
      
       console.log(response)
    },
    ()=>{
      
    }
  );
    });
  
   


  }
  

 

}
