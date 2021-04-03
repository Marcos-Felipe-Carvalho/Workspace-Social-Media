import { AuthenticationService } from './../authentication.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AuthenticationService]
})
export class LoginComponent implements OnInit {

  @Output() public showScreen: EventEmitter<string> = new EventEmitter<string>()

  public formLogin:FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required])
  })

  constructor(private authentication:AuthenticationService) { }

  ngOnInit(): void {
  }


  public authenticate():void{
    this.authentication.login(
      this.formLogin.value.email,
      this.formLogin.value.password
    )
  }

  public showRegister():void{
    this.showScreen.emit('register')
  }
}
