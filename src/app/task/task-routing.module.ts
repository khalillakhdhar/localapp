import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasksComponent } from './tasks/tasks.component';

const routes: Routes = [{ path: '', component: TaskComponent ,
children: [
  {path: '',component:AddtaskComponent},
  {path: 'tasks-list',component:TasksComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
