import { trigger, state, style, transition, animate, keyframes } from '@angular/animations';
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
      // 0 void ---- X ----------------------------------X---X--X--------------------X criado 1.5s///
      transition('void => created', [
        style({opacity: 0, transform: 'translate(-50px, 0px'}),
        animate('2s', keyframes([
          style({offset:0.15, opacity:1, transform: 'translateX(0)' }),
          style({offset:0.86, opacity:1, transform: 'translateX(0)' }),

          style({offset:0.88, opacity:1, transform: 'translateY(10px)' }),
          style({offset:0.90, opacity:1, transform: 'translateY(-10px)' }),
          style({offset:0.92, opacity:1, transform: 'translateY(10px)' }),
          style({offset:0.94, opacity:1, transform: 'translateY(-10px)' }),
          style({offset:0.96, opacity:1, transform: 'translateY(10px)' }),
          style({offset:0.98, opacity:1, transform: 'translateY(-10px)' }),
        ]))
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
