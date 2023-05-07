import { Component } from '@angular/core';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  tasks=Array<Task>();
  constructor() {
    let tasks=localStorage.getItem('tasks');
    if(tasks){
      this.tasks=JSON.parse(tasks);
    }
    else {
      this.tasks=[];
    }
  }

}
