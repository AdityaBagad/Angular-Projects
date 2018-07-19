import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formtemplate',
  templateUrl: './formtemplate.component.html',
  styleUrls: ['./formtemplate.component.css']
})
export class FormtemplateComponent {

  public onLogin(name)
  {
    console.log(name);
  }

}
