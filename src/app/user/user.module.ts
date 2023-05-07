import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { AuthComponent } from './auth/auth.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    AuthComponent,
    SubscribeComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
  ]
})
export class UserModule { }
