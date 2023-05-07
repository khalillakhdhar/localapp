import { Component } from '@angular/core';
import { User } from 'src/app/core/models/user';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent {
user = new User();
users: User[] = [];
constructor()
{
  // verifier si des users exist en localstorage ou pas
  if(localStorage.getItem("users"))
  {
   // alert("users exist");
    this.users = JSON.parse(localStorage.getItem("users") || '{}'); // lire les utilisateur du localstorage

  }
  else
  {
    this.users = [];
    //alert("no users")
  }

}
addUser()
{
  // ajouter un user au tableau
  this.users.push(this.user);
  // enregistrer le tableau dans le localstorage
  localStorage.setItem("users", JSON.stringify(this.users)); // convertir le tableau en chaine de caractere
  // vider le formulaire
  this.user = new User();
}
}
