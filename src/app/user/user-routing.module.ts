import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { AuthComponent } from './auth/auth.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [{ path: '', component: UserComponent
, children: [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', component: AuthComponent},
  { path: 'register', component: SubscribeComponent}
]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
