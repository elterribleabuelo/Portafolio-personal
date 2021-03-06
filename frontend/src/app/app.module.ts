import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {routing,appRoutingProviders} from './app.routing';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';

import * as $ from "jquery";
import { SliderComponent } from './components/slider/slider.component';
import { ResaltadoDirective } from './resaltado.directive';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterLayoutComponent } from './components/login-register-layout/login-register-layout.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CreateFormComponent } from './components/create-form/create-form.component';


import { ScriptService } from './services/script.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ProjectsComponent,
    CreateComponent,
    ContactComponent,
    ErrorComponent,
    DetailComponent,
    EditComponent,
    SliderComponent,
    ResaltadoDirective,
    LoginComponent,
    LoginRegisterLayoutComponent,
    RegisterUserComponent,
    CreateFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    appRoutingProviders,
    ScriptService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
