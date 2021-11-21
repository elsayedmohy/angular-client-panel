import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {Client} from "../models/client";
import {Observable} from "rxjs";
import {AngularFireDatabase} from "@angular/fire/compat/database";


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  clientDoc:AngularFirestoreDocument
  constructor(private afs: AngularFirestore) {
  }


  getClients() {
   return this.afs.collection("clients", ref => ref.orderBy("firstName"))
     .valueChanges({idField :"id"})
    }

    getClient(clientId :string){
    // return this.afs.doc(`clients/${clientId}`)
    //   return this.db.object('clients/' + clientId);
      this.clientDoc = this.afs.doc<Client>('clients/'+clientId);
     return  this.clientDoc.valueChanges();
  }

  addClient(client : Client) {
    this.afs.collection("clients").add(client)
  }

  updateClient(client :Client){
    this.clientDoc.update(client);
  }

  removeClient(){
    this.clientDoc.delete();
  }

}
