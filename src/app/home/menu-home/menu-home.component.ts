import { AuthenticationService } from './../../authentication/authentication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-home',
  templateUrl: './menu-home.component.html',
  styleUrls: ['./menu-home.component.scss'],
  providers: [AuthenticationService]
})
export class MenuHomeComponent implements OnInit {

  constructor(private autheticationService:AuthenticationService) { }

  ngOnInit(): void {
  }

  public logout():void{
    this.autheticationService.signOut()
  }
}
