import { User } from './../shared/model/user.mode';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public registerUser(user:User){
    firebase.default.auth().createUserWithEmailAndPassword(user.email, user.password)
      .then((response:any)=>{

        user.password = ""
        user.confirmEmail = ""
        user.confirmPassword = ""

        firebase.default.database().ref(`user details/${btoa(user.email)}`)
          .set( user )

        console.log(response)
      })
      .catch((error:Error)=>{
        console.log(error)
      })
      
  }

  constructor() { }
}
