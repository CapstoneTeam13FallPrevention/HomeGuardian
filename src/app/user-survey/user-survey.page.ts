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

  // stairs and steps

  async presentAlert5(){
    const alert = await this.alertController.create({
      header: 'Are there papers, shoes, boxes, or other objects on the stairs?',
      subHeader: 'Answer: YES',
      message: 'Pick up things on the stairs. Always keep objects off stairs.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert6(){
    const alert = await this.alertController.create({
      header: 'Are some steps broken or uneven?',
      subHeader: 'Answer: YES',
      message: 'Ask someone to move the furniture so your path is clear.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert7(){
    const alert = await this.alertController.create({
      header: 'Are you missing a light over the stairway?',
      subHeader: 'Answer: YES',
      message: 'Have an electrician put in an overhead light at the top and bottom of the stairs.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert8(){
    const alert = await this.alertController.create({
      header: 'Do you have only one light switch for your stairs (only at the top or at the bottom of the stairs)?',
      subHeader: 'Answer: YES',
      message: 'Have an electrician put in a light switch at the top and bottom of the stairs. You can get light switches that glow.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert9(){
    const alert = await this.alertController.create({
      header: 'Has the stairway light bulb burned out?',
      subHeader: 'Answer: YES',
      message: 'Have a friend or family member change the light bulb.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert10(){
    const alert = await this.alertController.create({
      header: 'Is the carpet on the steps loose or torn?',
      subHeader: 'Answer: YES',
      message: 'Make sure the carpet is firmly attached to every step, or remove the carpet and attach non-slip rubber treads to the stairs.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert11(){
    const alert = await this.alertController.create({
      header: 'Are the handrails loose or broken? Is there a handrail on only one side of the stairs?',
      subHeader: 'Answer: YES',
      message: 'Fix loose handrails or put in new ones. Make sure handrails are on both sides of the stairs and are as long as the stairs.',
      buttons: ['OK']
    });
    await alert.present();
  }

  //kitchen
  async presentAlert12(){
    const alert = await this.alertController.create({
      header: 'Are the things you use often on high shelves?',
      subHeader: 'Answer: YES',
      message: 'Move items in your cabinets. Keep things you use often on the lower shelves (about waist level).',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert13(){
    const alert = await this.alertController.create({
      header: 'Is your step stool unsteady?',
      subHeader: 'Answer: YES',
      message: 'If you must use a step stool, get one with a bar to hold on to. Never use a chair as a step stool.',
      buttons: ['OK']
    });
    await alert.present();
  }

  //bathrooms
  async presentAlert14(){
    const alert = await this.alertController.create({
      header: 'Is the tub or shower floor slippery?',
      subHeader: 'Answer: YES',
      message: 'Put a non-slip rubber mat or self stick strips on the floor of the tub or shower.',
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert15(){
    const alert = await this.alertController.create({
      header: 'Do you need some support when you get in and out of the tub or up from the toiler?',
      subHeader: 'Answer: YES',
      message: 'Have grab bars put in next to and inside the tub and next to the toilet.',
      buttons: ['OK']
    });
    await alert.present();
  }

  // bedrooms
  async presentAlert16(){
    const alert = await this.alertController.create({
      header: 'Is the light near the bed hard to reach?',
      subHeader: 'Answer: YES',
      message: "Place a lamp close to the bed where it's easy to reach.",
      buttons: ['OK']
    });
    await alert.present();
  }

  async presentAlert17(){
    const alert = await this.alertController.create({
      header: 'Is the path from your bed to the bathroom dark?',
      subHeader: 'Answer: YES',
      message: "Put in a night-light so you can see where you're walking. Some night-lights go on by themselves after dark.",
      buttons: ['OK']
    });
    await alert.present();
  }

  ngOnInit() {
  }

}
