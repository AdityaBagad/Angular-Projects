import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-component',
  templateUrl: './class-component.component.html',
  styleUrls: ['./class-component.component.css']
})
export class ClassComponentComponent implements OnInit {

  public MyClass = 'success';

  public hasSuccess = false;

  constructor() { }

  ngOnInit() {
  }

}
