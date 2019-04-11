import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
import { Router } from '@angular/router';
const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-therapist-photo-editor',
  templateUrl: './therapist-photo-editor.page.html',
  styleUrls: ['./therapist-photo-editor.page.scss'],
})
export class TherapistPhotoEditorPage implements OnInit {

  images = [];


  constructor(private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath,public router: Router,) { }

  ngOnInit() {
   this.getDataInfo();
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      let converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

 
 

  tapItem(imgEntry){
    console.log(imgEntry.therapist);
    this.router.navigate(['/therapist-detail'], {
      queryParams: {
       img: JSON.stringify(imgEntry),
      }
   })



    
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


}
