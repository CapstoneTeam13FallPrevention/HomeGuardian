import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { HttpClient ,HttpParams} from '@angular/common/http';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { FilePath } from '@ionic-native/file-path/ngx';

import { finalize } from 'rxjs/operators';
import { formatDate } from '@angular/common';
import { getTNode } from '@angular/core/src/render3/util';

const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-camera-control',
  templateUrl: './camera-control.page.html',
  styleUrls: ['./camera-control.page.scss'],
})
export class CameraControlPage implements OnInit {

  images = [];


  constructor(private camera: Camera, private file: File, private http: HttpClient, private webview: WebView,
    private actionSheetController: ActionSheetController, private toastController: ToastController,
    private storage: Storage, private plt: Platform, private loadingController: LoadingController,
    private ref: ChangeDetectorRef, private filePath: FilePath) { }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
  }

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        let arr = JSON.parse(images);
        this.images = []
        for (let img of arr) {
          let filePath = this.file.dataDirectory + img.name;
          let resPath = this.pathForImage(filePath);
          this.images.push({ name: img.name, path: resPath, filePath: filePath,upload:img.upload });
        }
      }
    });
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

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: "Select Image source",
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }
      ]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    var options: CameraOptions = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };

    this.camera.getPicture(options).then(imagePath => {
      if (this.plt.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY) {
        this.filePath.resolveNativePath(imagePath)
            .then(filePath => {
                let correctPath = filePath.substr(0, filePath.lastIndexOf('/') + 1);
                let currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
            });
          } else {
      var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
          }
    });
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


      this.images = [newEntry, ...this.images];
      this.ref.detectChanges();
    });
  }

  deleteImage(imgEntry, position){
    this.images.splice(position, 1);

    this.storage.get(STORAGE_KEY).then(images => {
      let arr = JSON.parse(images);
      let filtered = arr.filter(img => img.name != imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      var correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File removed.');
      });
    });
  }

  startUpload(imgEntry){
    this.file.resolveLocalFilesystemUrl(imgEntry.filePath)
    .then(entry => {
      (<FileEntry>entry).file(file => this.readFile(file,imgEntry))
    })
    .catch(err => {
      this.presentToast('Error while reading file.');
    })
  }

  readFile(file:any,imgEntry:any){
    const reader = new FileReader();
    reader.onloadend = () => {
      const formData = new FormData();
      const imgBlob = new Blob([reader.result], {
        type: file.type
      });
      formData.append('file', imgBlob, file.name);
      this.uploadImageData(formData,imgEntry);
    };
    reader.readAsArrayBuffer(file);
  }

  async uploadImageData(formData: FormData,imgEntry:any){
    const loading = await this.loadingController.create({
      message: 'Uploading image...',
    });
    await loading.present();
   
    this.http.post("http://localhost:8888/160063D_php/upload.php",formData)
      .pipe(
        finalize(() => {
          loading.dismiss();
        //  this.presentToast('C2'); //This is called
        })
      ).subscribe(res => {
      
        if (res['success']) {

          console.log(res);
          this.uploaddataInfo(imgEntry);

        } else {
          console.log(res);
         this.presentToast('File upload failed.') //Not called
        }
        v => console.log("C3")
     }
      );

      this.presentToast('C1.') //This is called
  }

  uploaddataInfo(imgEntry:any){


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
      .set('imageName',imgEntry.name).set('dateId',data.id);
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
