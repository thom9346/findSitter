import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    UsersComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AuthGuard, AuthService, DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
