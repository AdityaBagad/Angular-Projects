import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentsInfo } from '../studentInfo';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent {

  student: StudentsInfo = {
    studentRollno: '',
    studentName: '',
    studentMarks: ''
  }

  public itemsCollection: AngularFirestoreCollection<StudentsInfo>;
  public items: Observable<StudentsInfo[]>;

  constructor(private db: AngularFirestore) {

    this.itemsCollection = this.db.collection<StudentsInfo>('Stud_Info');

      this.items = this.itemsCollection.snapshotChanges().pipe(
        map(actions => actions.map(a => {
          const data = a.payload.doc.data() as StudentsInfo;
          const id = a.payload.doc.id;
          return { id, ...data };
        }))
      );
  }

  // This variable stores the DocumentId of the selected collection 
  private documentID: string;

  public updateStudent(st) {
    //console.log(st.id);
    this.student.studentName = st.Stud_Name;
    this.student.studentRollno = st.Stud_Rollno;
    this.student.studentMarks = st.Stud_Marks;
    this.documentID = st.id;
  }

  public updateStudentToFirestore() {
    //console.log(this.documentID);
    this.itemsCollection.doc(this.documentID).update({
      Stud_Name: this.student.studentName,
      Stud_Rollno: this.student.studentRollno,
      Stud_Marks: this.student.studentMarks
    });
  }
}
