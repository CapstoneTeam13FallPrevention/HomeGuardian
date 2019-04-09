import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import{ActivatedRoute,Params} from  '@angular/router';//获取路由传参用到
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { NgForm } from '@angular/forms';
const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-therapist-detail',
  templateUrl: './therapist-detail.page.html',
  styleUrls: ['./therapist-detail.page.scss'],
})
export class TherapistDetailPage implements OnInit {
  
  image;


  constructor(private activateInfo:ActivatedRoute, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath) { 

      activateInfo.queryParams.subscribe(queryParams => {
        this.image = JSON.parse(queryParams.img);
      console.log(queryParams.img)
      })


    }

  ngOnInit() {
   
  }

  send(form: NgForm) {
     var code = form.value.tip;
    console.log(code)
    
 

   }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

 


}
