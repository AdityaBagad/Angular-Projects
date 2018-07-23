import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipecomp',
  templateUrl: './pipecomp.component.html',
  styleUrls: ['./pipecomp.component.css']
})
export class PipecompComponent  {

  name = "Hello";
  today = new Date();
  no = 78.369;

  public Student = 
  {
    "Name" : "Steve",
    "RollNo" : 7
  }
}
