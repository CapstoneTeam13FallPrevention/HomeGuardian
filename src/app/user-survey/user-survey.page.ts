import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-user-survey',
  templateUrl: './user-survey.page.html',
  styleUrls: ['./user-survey.page.scss'],
})
export class UserSurveyPage implements OnInit {

  constructor(public alertController: AlertController) {}

  async presentAlert1() {
    const alert = await this.alertController.create({
      header: 'When you walk through a room, do you have to walk around furniture?',
      subHeader: 'Answer: YES',
      message: 'Ask someone to move the furniture so your path is clear.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert2() {
    const alert = await this.alertController.create({
      header: 'Do you have throw rugs on the floor?',
      subHeader: 'Answer: YES',
      message: "Remove the rugs or use double-sided tape or a non-slip backing so the rugs won't slip.",
      buttons: ['OK']
    });

    await alert.present();
  }


  ngOnInit() {
  }

}
