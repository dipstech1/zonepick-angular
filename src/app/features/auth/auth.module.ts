import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthShellComponent } from './auth-shell/auth-shell.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ButtonModule } from 'src/app/shared/button/button.module';


@NgModule({
  declarations: [
    AuthShellComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ButtonModule
  ]
})
export class AuthModule { }
