import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';

import { AlertComponent } from './_directives/alert.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';

import { routing } from './app.routing';

import { AuthGuard } from './auth.guard';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    UserComponent,
    HomeComponent,
    ProfileComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      routing
  ],
  providers: [
      AuthGuard,
      AlertService,
      AuthenticationService,
      UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
