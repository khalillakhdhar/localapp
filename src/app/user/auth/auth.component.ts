import { Component } from '@angular/core';
import { User } from '../../core/models/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  user=new User();
  users:User[]=[];
  constructor(router: Router)
  {
    if(localStorage.getItem("users"))
    {
      this.users=JSON.parse(localStorage.getItem("users") || '{}');
    }
    else
    {
      this.users=[];
      alert("Please subscribe first");
      // redirect to subscribe page
      window.location.replace("user/register");


    }
  }
  authUser()
  {
    let exist=false;
    for(let us of this.users)
    {
      if(us.email==this.user.email && us.password==this.user.password)
      {
        exist=true;
        localStorage.setItem("currentUser",JSON.stringify(us));
        // connaitre le user connecté
        window.location.replace("task");

      }

    }
    if(!exist)
    {
      alert("User not found");
    }
  }


}
