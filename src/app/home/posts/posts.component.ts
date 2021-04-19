import { BdService } from './../../bd.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from  'firebase'

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {

  public email:any

  constructor(private bdService:BdService) { }

  ngOnInit(): void {

    firebase.default.auth().onAuthStateChanged((user)=>{

      this.email = user?.email 

      this.refreshTimeline()

    })
  }

  public refreshTimeline():void{
    this.bdService.getPosts(this.email)
  }
}
