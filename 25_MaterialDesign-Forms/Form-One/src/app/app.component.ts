import { Component } from '@angular/core';
import { Users } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // Creating object of 'Users' class 'user_obj'
  user_obj: Users = {username: '', password: ''};

  loginUser() {
    console.log("Username : "+this.user_obj.username);
    console.log("Password : "+this.user_obj.password);
  }

}
