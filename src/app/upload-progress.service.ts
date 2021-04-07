import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadProgressService {

  public state:any;
  public status:string=''

  constructor() { }
}
