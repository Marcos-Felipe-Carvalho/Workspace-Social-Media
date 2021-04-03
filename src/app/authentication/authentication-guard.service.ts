import { AuthenticationService } from './authentication.service';
import { Injectable } from "@angular/core";
import { CanActivate } from "@angular/router";

@Injectable()
export class AuthenticationGuard implements CanActivate{

    constructor(private autheticationService:AuthenticationService){}
    
    canActivate():boolean{
        return this.autheticationService.authenticated()
    }
}