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
  selector: 'app-message-control',
  templateUrl: './message-control.page.html',
  styleUrls: ['./message-control.page.scss'],
})
export class MessageControlPage implements OnInit {
  
  images = [];


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
    this.getDataInfo();
  }

  getDataInfo(){
  
    this.storage.get('threapistData').then((value)=>{
      var data = JSON.parse(value);

      const params = new HttpParams()
      .set('username', data.username)
      .set('password', data.password)
      .set('clinic', data.clinic);

      this.http
      .post("http://localhost:8888/160063D_php/getdata.php",params)
      .subscribe(
        (res) =>{
         console.log("请求数据成功");
         console.log("请求数据成功");
          if (res['success'] == "1") {
          
            console.log(res["data"][0]["id"]);
            this.images = res["data"];
            this.images.map(item=>{
            item.imageName = "http://localhost:8888/160063D_php/img/"+item.imageName;
            return item;
           });
console.log(this.images[0]["imageName"])

         
          }else{
            this.presentToast('File upload fail.') //Not called
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

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

 


}
