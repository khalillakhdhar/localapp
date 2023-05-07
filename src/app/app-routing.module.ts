import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  // redirect to user on load
{
    path: '', redirectTo: 'user', pathMatch: 'full'},

    {
        path: 'user',
        loadChildren: () => import ('./user/user.module').then(m => m.UserModule)
    }, {
        path: 'task',
        loadChildren: () => import ('./task/task.module').then(m => m.TaskModule)
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
