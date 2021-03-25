import { User } from './../../shared/model/user.mode';
import { FormValidators } from './../../shared/form/form-validators';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  //public validators: FormValidators

  public formRegister:FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, FormValidators.required]),
    userName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    confirmEmail: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required),
  }) 

  @Output() public showScreen:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public showLogin():void{
    this.showScreen.emit('login')
  }

  public registerUser():void{
    console.log(this.formRegister)

    let user:User = new User(
      this.formRegister.value.name,
      this.formRegister.value.userName,
      this.formRegister.value.email,
      this.formRegister.value.confirmEmail,
      this.formRegister.value.password,
      this.formRegister.value.confirmPassword
    )

    console.log(user)
  }
}
