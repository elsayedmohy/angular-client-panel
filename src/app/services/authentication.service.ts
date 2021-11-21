import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private afAuth:AngularFireAuth) { }

  login(email, password){
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(email,password)
        .then(userData => resolve(userData),
          err => reject(err)
          )
    })
  }

  register(email, password) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(email,password)
        .then(userData => resolve(userData),
          err => reject(err)
        )
    })
  }

  logout(){
    this.afAuth.signOut()
  }

  getAuthStatus() {
    return this.afAuth.authState
  }

}
