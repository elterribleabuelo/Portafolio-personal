import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule, Router} from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateComponent } from './components/create/create.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import  {DetailComponent } from './components/detail/detail.component';
import { EditComponent } from './components/edit/edit.component';
import { LoginComponent } from './components/login/login.component';
import { LoginRegisterLayoutComponent } from './components/login-register-layout/login-register-layout.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { CreateFormComponent } from './components/create-form/create-form.component';

const appRoutes:Routes = [
  {path:'',component:AboutComponent},
  {path:'inicio',component:LoginRegisterLayoutComponent},
  {path:'login',component:LoginComponent},
  {path:'register-user',component:RegisterUserComponent},
  {path:'form',component:CreateFormComponent},
  {path:'sobre-mi',component:AboutComponent},
  {path:'proyectos',component:ProjectsComponent},
  {path:'crear-proyecto',component:CreateComponent},
  {path:'contacto',component:ContactComponent},
  {path:'proyecto/:id',component:DetailComponent},
  {path:'editar-proyecto/:id',component:EditComponent},
  {path:'**', component:AboutComponent}
];


export const appRoutingProviders:any[] = [];
export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
