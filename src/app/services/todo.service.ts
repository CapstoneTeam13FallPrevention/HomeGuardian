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


export class TodoService {
}