import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Image } from '../shared/image.model';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    trigger('banner', [
      state('hidden', style({
        opacity: 0
      })),
      state('visible', style({
        opacity:1
      })),
      transition('hidden <=> visible', animate('1s ease-in'))
    ])
  ]
})
export class BannerComponent implements OnInit {

  public estado: string = 'escondido' //aula 247

  public images: Array<Image> = [
    {status: 'visible', url:'../../../assets/images/banner_001.png'},
    {status: 'hidden', url:'../../../assets/images/banner_002.png'},
    {status: 'hidden', url:'../../../assets/images/banner_003.png'}
  ]

  constructor() { }

  ngOnInit(): void {
    setTimeout(()=>this.rotation(),3000)
  }

  public rotation(){

    //auxilia na exibição da imagem seguinte
    let index:number = 0

    //ocultar imagem
    for(let i:number=0; i<=this.images.length - 1; i++){
      if (this.images[i].status === 'visible') {
        this.images[i].status='hidden'

        index = i === 2 ? 0 : i + 1
        break
      }
    }

    this.images[index].status = 'visible'



    setTimeout(()=>this.rotation(),3000)

  }

}
