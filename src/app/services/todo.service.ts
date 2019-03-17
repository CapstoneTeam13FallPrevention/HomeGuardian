import { Component, OnInit } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection} from 'angularfire2/firestore';
import {Injectable} from '@angular/core'
import {Observable} from 'rxjs'
import {map} from 'rxjs/operators'



export interface Todo{
  clinic:string;
  therapist: string;


}
@Injectable({
  providedIn: 'root'
}

)


export class TodoService implements OnInit {


  private patientinformationCollection:AngularFirestoreCollection<Todo>;
  private todos:Observable<Todo[]>;

  constructor(db:AngularFirestore)
   {
     this.patientinformationCollection =db.collection<Todo>('todos');

     this.todos= this.patientinformationCollection.snapshotChanges().pipe(map(actions=>{
       return actions.map(a=>{
         const data=a.payload.doc.data();
         const id=a.payload.doc.id;
         return {id,...data};
       });

     })

   );
   }


getTodos()
  {
  return this.todos;
}

getTodo(id)
{
  return this.patientinformationCollection.doc<Todo>(id).valueChanges();
}
updateTodo(todo:Todo, id: string)
{
  return this.patientinformationCollection.doc(id).update(todo);
}
addTodo(todo:Todo)
{
  return this.patientinformationCollection.add(todo);
}
removeTodo(id)
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
