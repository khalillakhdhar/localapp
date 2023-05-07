import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Task } from 'src/app/core/models/task';

@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent {
task=new Task();
tasks=Array<Task>();
// ajouter router navigation

  constructor(private router: Router) {
// lire tasks depuis le local storage
    let tasks=localStorage.getItem('tasks');
    if(tasks){
      this.tasks=JSON.parse(tasks);
    }
    else {
      this.tasks=[];
    }


  }
  // ajouter tache
  addTask(){
    this.tasks.push(this.task);
    localStorage.setItem('tasks',JSON.stringify(this.tasks));
    this.task=new Task(); // vider le formulaire
    window.location.reload();
  }
deconnexion(){
  //localStorage.removeItem('user');
  localStorage.clear();

  this.router.navigate(['../']);
}
}
