import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AuthGuard } from './auth-guard';
import { AuthService } from './auth.service';
import { HomeComponent } from './home/home.component';
import { BabyComponent } from './baby/baby.component';
import { BabySitterComponent } from './baby-sitter/baby-sitter.component';
import { PortalComponent } from './portal/portal.component';
import { FindBabyComponent } from './find-baby/find-baby.component';
import { FindSitterComponent } from './find-sitter/find-sitter.component';
import { DataService } from './data.service';
import { UsersComponent } from './users/users.component';
import { AdminGuardService } from './admin-guard.service';
import { UserDescriptionComponent } from './users/user-description/user-description.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContactComponent,
    RegisterComponent,
    PageNotFoundComponent,
    HomeComponent,
    BabyComponent,
    BabySitterComponent,
    PortalComponent,
    FindBabyComponent,
    FindSitterComponent,
    UsersComponent,
    UserDescriptionComponent
  ],
  imports: [
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  providers: [AuthGuard, AuthService, DataService, AdminGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
