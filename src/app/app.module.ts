import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UserDetailsComponent } from './userdetails/userdetails.component';
import { PetDetailsComponent } from './pet-details/pet-details.component';
import { PetCreateComponent } from './pet-create/pet-create.component';
import { UserConfigComponent } from './user-config/user-config.component';

import { JwtInterceptor } from './interceptors/jwt-interceptor';
import { ErrorInterceptor } from './interceptors/error-interceptor';
import { VetsComponent } from './vets/vets.component';
import { VaccineFormComponent } from './vaccine-form/vaccine-form.component';
import { SurgerieFormComponent } from './surgerie-form/surgerie-form.component';
import { DiseaseFormComponent } from './disease-form/disease-form.component';
import { ReproductiveHistoryFormComponent } from './reproductive-history-form/reproductive-history-form.component';
import { DewormingFormComponent } from './deworming-form/deworming-form.component';
import { VisitFormComponent } from './visit-form/visit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    UserDetailsComponent,
    PetDetailsComponent,
    PetCreateComponent,
    UserConfigComponent,
    VetsComponent,
    VaccineFormComponent,
    SurgerieFormComponent,
    DiseaseFormComponent,
    ReproductiveHistoryFormComponent,
    DewormingFormComponent,
    VisitFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
