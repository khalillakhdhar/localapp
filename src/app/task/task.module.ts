import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskComponent } from './task.component';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasksComponent } from './tasks/tasks.component';


@NgModule({
  declarations: [
    TaskComponent,
    AddtaskComponent,
    TasksComponent
  ],
  imports: [
    CommonModule,
    TaskRoutingModule
  ]
})
export class TaskModule { }
