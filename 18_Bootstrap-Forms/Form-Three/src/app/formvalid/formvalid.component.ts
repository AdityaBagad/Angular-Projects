import { Component } from '@angular/core';

@Component({
  selector: 'app-formvalid',
  templateUrl: './formvalid.component.html',
  styleUrls: ['./formvalid.component.css']
})
export class FormvalidComponent {

  public Username: string;
  public Password: string;
  public CollegeName: string;

  public sendData()
  {
    console.log(this.Username, this.Password, this.CollegeName);
  }

}
