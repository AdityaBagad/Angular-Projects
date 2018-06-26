import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-component',
  templateUrl: './property-component.component.html',
  styleUrls: ['./property-component.component.css']
})
export class PropertyComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public myID = 'myTestId';
  public isDisabled = 'true';

}
