import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';
const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-therapist-photo-editor',
  templateUrl: './therapist-photo-editor.page.html',
  styleUrls: ['./therapist-photo-editor.page.scss'],
})
export class TherapistPhotoEditorPage implements OnInit {

  images = ["dd","rrrr"];


  constructor(private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath) { }

  ngOnInit() {
   this.uploaddataInfo();
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

  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(success => {
      this.updateStoredImages(newFileName);
    }, error => {
      this.presentToast('Error while storing file.');
    });
  }

  createFileName() {
    var d = new Date(),
        n = d.getTime(),
        newFileName = n + ".jpg";
    return newFileName;
  }

  updateStoredImages(name){
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filePath = this.file.dataDirectory + name;
      let resPath = this.pathForImage(filePath);
      let newEntry = {
        name: name,
        path: resPath,
        filePath: filePath,
        upload:true
      };

      
      if (!arr) {
        let newImages = [newEntry];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else{
        arr.push(newEntry);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }


    
      this.ref.detectChanges();
    });
  }


  tapItem(imgEntry){
    alert("wwwwwww");
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
          console.log(res);
          if (res['success']) {
            
           
           
         
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
