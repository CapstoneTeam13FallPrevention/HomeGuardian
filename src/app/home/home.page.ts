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
  

    
   


  }
  

 

}
