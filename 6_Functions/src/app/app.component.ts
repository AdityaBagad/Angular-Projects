import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  header = 'Functions';
  message = 'hello world';

  fun(){
    return 'Inside fun()';
  }

  toUpper(){
    return this.message.toUpperCase();
  }
}
