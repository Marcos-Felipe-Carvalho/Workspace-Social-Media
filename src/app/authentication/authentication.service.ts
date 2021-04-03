import { User } from './../shared/model/user.mode';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { Router } from '@angular/router';

@Injectable( )
export class AuthenticationService {

  constructor(private router :Router){}

  public jwt:any=''

  public registerUser(user:User):Promise<any>{
    return firebase.default.auth().createUserWithEmailAndPassword(user.email, user.password)
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

  public login(email:string, password:string):void{
    firebase.default.auth().signInWithEmailAndPassword(email, password)
      .then((response:any)=>{
        firebase.default.auth().currentUser?.getIdToken()
          .then((token:string)=>{
            this.jwt=token
            localStorage.setItem('token', token)
            this.router.navigate(['/home'])
          }).catch(
            (error:Error)=>{
              console.log(error)
            }
          )
      })
      .catch((error:Error)=>{
        console.log(error)
      })
  }

  public authenticated():boolean{

    if(this.jwt  !== undefined && localStorage.getItem('token') != null){
      return true
    }
    
    if(localStorage.getItem('token') === null === undefined){
      this.router.navigate(['/'])
      return false
    }
    
    return false

  }

  public signOut():void{

    firebase.default.auth().signOut()
      .then(()=>{
        localStorage.removeItem('token')
        this.jwt = undefined
      }).catch((error:Error)=>{
        console.log(error)
      })
  }
}
