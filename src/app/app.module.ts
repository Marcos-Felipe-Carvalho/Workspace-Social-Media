import { UploadProgressService } from './upload-progress.service';
import { BdService } from './bd.service';
import { AuthenticationService } from './authentication/authentication.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { LoginComponent } from './authentication/login/login.component';
import { BannerComponent } from './authentication/banner/banner.component';
import { RegisterComponent } from './authentication/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MessageErrorComponent } from './shared/form/message-error/message-error.component';
import { HomeComponent } from './home/home.component';
import { PostsComponent } from './home/posts/posts.component';
import { AuthenticationGuard } from './authentication/authentication-guard.service';
import { MenuHomeComponent } from './home/menu-home/menu-home.component';
import { HeroComponent } from './home/hero/hero.component';
import { NewPostComponent } from './home/new-post/new-post.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    LoginComponent,
    BannerComponent,
    RegisterComponent,
    MessageErrorComponent,
    HomeComponent,
    PostsComponent,
    MenuHomeComponent,
    HeroComponent,
    NewPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AuthenticationService,
    AuthenticationGuard,
    BdService,
    UploadProgressService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
