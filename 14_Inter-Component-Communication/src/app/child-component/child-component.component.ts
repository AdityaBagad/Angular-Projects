import { Component, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent {

  @Input() public ParentData;

  @Output() public eventEmitter = new EventEmitter<string>();

  public MessageToParent = 'Hello From Child';

  sendEvent() {
    this.eventEmitter.emit(this.MessageToParent);
  } 
  
}
