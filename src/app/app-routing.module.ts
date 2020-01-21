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
import { VetsComponent } from './vets/vets.component';
import { VaccineFormComponent } from './vaccine-form/vaccine-form.component';
import { SurgerieFormComponent } from './surgerie-form/surgerie-form.component';
import { DiseaseFormComponent } from './disease-form/disease-form.component';
import { ReproductiveHistoryFormComponent } from './reproductive-history-form/reproductive-history-form.component';
import { DewormingFormComponent } from './deworming-form/deworming-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sign-up', component: SignupComponent },
  { path: 'user-config', component: UserConfigComponent },
  { path: 'users/search/findByEmail', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'users/:id', component: UserDetailsComponent, canActivate: [AuthGuard] },
  { path: 'pets/create', component: PetCreateComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id/add-vaccine', component: VaccineFormComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id/add-surgerie', component: SurgerieFormComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id/add-disease', component: DiseaseFormComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id/add-reproductive-history', component: ReproductiveHistoryFormComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id/add-deworming', component: DewormingFormComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id/add-visit', component: VisitFormComponent, canActivate: [AuthGuard] },
  { path: 'pets/:id', component: PetDetailsComponent, canActivate: [AuthGuard] },
  { path: 'vets', component: VetsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
