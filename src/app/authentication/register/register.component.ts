import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  @Output() public showScreen:EventEmitter<string> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  public showLogin():void{
    this.showScreen.emit('login')
  }
}
