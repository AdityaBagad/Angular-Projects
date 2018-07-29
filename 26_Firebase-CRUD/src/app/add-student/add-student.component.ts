import { Component } from '@angular/core';

import { StudentsInfo } from '../studentInfo';
import { AngularFirestore } from '../../../node_modules/angularfire2/firestore';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent {

  constructor (private db: AngularFirestore) {  }

  student: StudentsInfo = {
    studentRollno: '',
    studentName: '',
    studentMarks: ''
  } 

  // Adding student to Firestore
  public addStudent() {
    this.db.collection('/Stud_Info').add({
      Stud_Rollno: this.student.studentRollno, 
      Stud_Name: this.student.studentName, 
      Stud_Marks: this.student.studentMarks
    });
    //console.log(this.student.studentRollno,this.student.studentName,this.student.studentMarks);
  }
  

}
