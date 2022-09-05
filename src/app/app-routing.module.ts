import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import {ReclamationComponent} from './reclamation/reclamation.component';
import { MesreclamationsComponent } from './mesreclamations/mesreclamations.component';
import { ListeticketsComponent } from './listetickets/listetickets.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'reclamation' , component:ReclamationComponent},
  {path :'mesreclamations' , component:MesreclamationsComponent},
  {path : 'listetickets' , component:ListeticketsComponent},
  {path : 'userprofile' , component:UserprofileComponent},
 

  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
