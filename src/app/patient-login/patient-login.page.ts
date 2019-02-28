import { Component, OnInit } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'
export interface infor{
  clinic:string;
  therapist: string;


}
@Injectable({
  providedIn: 'root'
}

)
@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.page.html',
  styleUrls: ['./patient-login.page.scss'],
})


export class PatientLoginPage implements OnInit {

  private patientinformationCollection:AngularFirestoreCollection<infor>;
  private infor:Observable<infor[]>;

  constructor(db:AngularFirestore)
   {
     this.patientinformationCollection =db.collection<infor>('infor');
     this.infor = this.patientinformationCollection.snapshotChanges().pipe(map(actions=>{
       return actions .map(a=>{
         const data=a.payload.doc.data();
         const id=a.payload.doc.id;
         return {id,...data};
       });

     })

   );
   }


getinfor(){
  return this.infor;
}

getInfor(id)
{
  return this.patientinformationCollection.doc<infor>(id).valueChanges();
}
updateinfor(infor:infor, id: string)
{
  return this.patientinformationCollection.doc(id).update(infor);
}
addInfor(infor:infor)
{
  return this.patientinformationCollection.add(infor);
}
removeInfor(id)
{
  return this.patientinformationCollection.doc(id).delete();
}









  ngOnInit() {
  }

  customActionSheetOptionsClinic: any = {
    header: 'Clinic',
    subHeader: 'Select your Clinic'
  }

  customActionSheetOptionsTherapist: any = {
    header: 'Therapist',
    subHeader: 'Select your Therapist'
  }

}
