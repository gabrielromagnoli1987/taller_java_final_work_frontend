import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './_helpers/auth.guard';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './userdetails/userdetails.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { UserConfigComponent } from './user-config/user-config.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-config', component: UserConfigComponent },
  { path: 'users/search/findByEmail', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'pets/create', component: PetCreateComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id', component: PetDetailsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
