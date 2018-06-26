import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-component',
  templateUrl: './style-component.component.html',
  styleUrls: ['./style-component.component.css']
})
export class StyleComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  IsSet = true;
  MyColor = '';

  toBlueColor(){
    this.MyColor = 'blue';
  }

  toRedColor(){
    this.MyColor = 'red';
  }

  toGreenColor(){
    this.MyColor = 'green';
  }

}
