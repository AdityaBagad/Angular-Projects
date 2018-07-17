import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStudent } from './Student';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  // Add dependency in service constructor for httpclient 
  constructor(private http:HttpClient) { }

  private _pathToJSON = '/assets/data/students.json';

  // Method in service class which returns array of Student details
  GetStudentDetails():Observable<IStudent[]>
  {
    return this.http.get<IStudent[]>(this._pathToJSON);
  }
}
