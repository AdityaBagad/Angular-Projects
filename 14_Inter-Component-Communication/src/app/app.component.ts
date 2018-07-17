import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public ParentMessage = 'Hello from Parent';

  ChildMessage: string;

  receiveEvent($event) {
    this.ChildMessage = $event;
  }
  
}
