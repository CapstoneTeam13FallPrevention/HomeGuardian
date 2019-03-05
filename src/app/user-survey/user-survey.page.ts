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

  async presentAlert3() {
    const alert = await this.alertController.create({
      header: 'Are there papers, books, towels, shoes, magazines, boxes, blankets, or other objects on the floor?',
      subHeader: 'Answer: YES',
      message: 'Pick up things that are on the floor. Always keep objects off the floor.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async presentAlert4() {
    const alert = await this.alertController.create({
      header: 'Do you have to walk over or around wires or cords (like lamp, telephone, or extension cords)?',
      subHeader: 'Answer: YES',
      message: "Coil or tape cords and wires next to the wall so you can't trip over them. If needed, have an electrician put in another outlet.",
      buttons: ['OK']
    });

    await alert.present();
  }



  ngOnInit() {
  }

}
