import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'workspace-project';

  ngOnInit():void{

    var firebaseConfig = {
      apiKey: "AIzaSyDN3gZBm-7r0TbaH6a02q_2ktTUF1PsdWA",
      authDomain: "workspace-social-media.firebaseapp.com",
      databaseURL: "https://workspace-social-media-default-rtdb.firebaseio.com/",
      projectId: "workspace-social-media",
      storageBucket: "workspace-social-media.appspot.com",
      messagingSenderId: "870354743127",
      appId: "1:870354743127:web:941d969bccf04a7889d812",
      measurementId: "G-QRDWHDCD50"
    };
    
    firebase.default.initializeApp(firebaseConfig)
  }

  
}
