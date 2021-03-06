import { UploadProgressService } from './../../upload-progress.service';
import { FormGroup, FormControl } from '@angular/forms';
import { BdService } from './../../bd.service';
import { Component, OnInit } from '@angular/core';
import * as firebase from  'firebase'
import { Observable, interval, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  public email:any;
  private image:any;

  public progressPost:string='pending'
  public percentageUpload:number=1000

  public formPost:FormGroup = new FormGroup({
    "title": new FormControl(null)
  })

  constructor(
    private bdService:BdService,
    private uploadProgress: UploadProgressService  
  ) { }

  ngOnInit(): void {
    firebase.default.auth().onAuthStateChanged((user)=>{
      this.email = user?.email
    })
  }

  public prepareImageUpload(event:Event):void{
    this.image = (<HTMLInputElement>event.target).files
  }
  public sendPost(){
    this.bdService.publish({
      email: this.email,
      title: this.formPost.value.title,
      image: this.image[0]
    })


    let uploadTracking = interval(1500)

    let toBeContinued = new Subject()

    toBeContinued.next(true)

    uploadTracking
      .pipe(takeUntil(toBeContinued))
      .subscribe(
        ()=>{

          this.progressPost = 'in progress'

          this.percentageUpload = Math.round((this.uploadProgress.state.bytesTransferred / this.uploadProgress.state.totalBytes)*100)

          if(this.uploadProgress.status === 'concluído'){
            this.progressPost = 'concluded'
            toBeContinued.next(false)
          }
        }
      )

    
  }

}
