import { UploadProgressService } from './upload-progress.service';
import { Injectable } from '@angular/core';
import * as firebase from 'firebase'
import { interval, Observable } from 'rxjs'

@Injectable()
export class BdService {

  constructor(private uploadProgress: UploadProgressService) { }

  public publish(post: any): void {

    //nova publicação
    firebase.default.database().ref(`posts/${btoa(post.email)}`)
      .push({
        title: post.title,
      })
      .then((response: any) => {
        let nameImage = response.key

        //Upload de imagem
        firebase.default.storage().ref()
          .child(`images/${nameImage}`)
          .put(post.image)
          .on(firebase.default.storage.TaskEvent.STATE_CHANGED,
            //acompanhamento do progresso de upload
            (snapshot: any) => {
              this.uploadProgress.status = 'em andamento'
              this.uploadProgress.state = snapshot
            },
            (error: Error) => {
              this.uploadProgress.status = 'erro'
              this.uploadProgress.state = error
            },
            () => {
              //finalização do processo
              this.uploadProgress.status = 'concluído'

            }
          )

      })


    /**/
  }
}
