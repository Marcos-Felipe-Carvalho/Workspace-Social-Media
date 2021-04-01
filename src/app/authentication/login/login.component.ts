import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Output() public showScreen: EventEmitter<string> = new EventEmitter<string>()

  public formLogin:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor() { }

  ngOnInit(): void {
  }


  public authenticate():void{
    console.log(this.formLogin)
  }

  public showRegister():void{
    this.showScreen.emit('register')
  }
}
