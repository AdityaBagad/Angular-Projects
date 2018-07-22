import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public showData(data_name, data_age)
  {
    console.log(data_name, data_age);
  }
}
