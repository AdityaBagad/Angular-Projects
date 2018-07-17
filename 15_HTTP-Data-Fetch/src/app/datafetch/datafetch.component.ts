import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-datafetch',
  templateUrl: './datafetch.component.html',
  styleUrls: ['./datafetch.component.css']
})
export class DatafetchComponent implements OnInit {

  // Create an array to hold the Student Details
  public students = [];

  // Add instance of Services in constructor
  constructor(private _studentservice:StudentsService) { }

  ngOnInit() {
  }

  fetchData(){
    this._studentservice.GetStudentDetails().subscribe(data=>this.students=data);
  }

}
