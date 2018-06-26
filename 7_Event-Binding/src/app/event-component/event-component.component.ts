import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-component',
  templateUrl: './event-component.component.html',
  styleUrls: ['./event-component.component.css']
})
export class EventComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  message = '';

  ClickEvent() {
    this.message = 'You Clicked';
    console.log('Button pressed');
  }

  ClickEventValue(value){
    this.message = "Check console for Event Information";
    console.log(value);
  }

}
