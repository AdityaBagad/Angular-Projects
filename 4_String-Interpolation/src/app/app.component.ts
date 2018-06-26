import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'String Interpolation';
  author = 'aditya bagad'

  greetUser()
  {
    return "Welcome " + this.author;
  }

}
