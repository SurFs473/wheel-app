import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { RegisterComponent } from '../register/register.component';
import { WheelComponent } from '../wheel/wheel.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from '../login/login.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    WheelComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    HomeRoutingModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
