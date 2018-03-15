import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { AuthGuard } from './auth-guard';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { FindBabyComponent } from './find-baby/find-baby.component';
import { FindSitterComponent } from './find-sitter/find-sitter.component';
import { UsersComponent } from './users/users.component';
import { AdminGuardService } from './admin-guard.service';

const routes: Routes = [
  {path: 'home', component: HomeComponent, children: [

    { path: 'contact', component: ContactComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

  ]},

  {path: 'portal', component: PortalComponent, children: [
    {path: 'findBaby', component: FindBabyComponent, canActivate: [AuthGuard]},
    {path: 'findSitter', component: FindSitterComponent,  canActivate: [AuthGuard]},
    {path: 'users', component: UsersComponent, canActivate: [AdminGuardService]},

  ]},
 
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
