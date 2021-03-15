import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
  animations: [
    trigger('animation-banner', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({opacity: 0, transform: 'translate(50px,0px)'}),
        animate('500ms 0s ease-in-out')
      ])
    ]),
    trigger('animation-form', [
      state('created', style({
        opacity: 1
      })),
      transition('void => created', [
        style({opacity: 0, transform: 'translate(-50px, 0px'}),
        animate('500ms 0s ease-in-out')
      ])
    ])
  ]
})
export class AuthenticationComponent implements OnInit {

  public statusBanner: string = 'created'
  public statusForm:string = 'created'

  public register:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  public showScreen(event:string):void{
    this.register = event === 'register' ? true:false
  }

}
