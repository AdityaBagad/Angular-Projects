import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { StudentsInfo } from '../studentInfo';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.css']
})
export class DeleteStudentComponent  {

  public itemsCollection: AngularFirestoreCollection<StudentsInfo>;
  public items: Observable<StudentsInfo[]>;

  constructor(private db: AngularFirestore) {

    this.itemsCollection = this.db.collection<StudentsInfo>('/Stud_Info');
    //this.items = this.itemsCollection.valueChanges();

      // .snapshotChanges() returns a DocumentChangeAction[], which contains
      // a lot of information about "what happened" with each change. If you want to
      // get the data and the id use the map operator.
      this.items = this.itemsCollection.snapshotChanges().pipe(
        map(changes => changes.map(a => {
            const data = a.payload.doc.data() as StudentsInfo;
            const id = a.payload.doc.id;
            return { id, ...data}
        })
      ));
      
  }

  // Deleting a Student from Firestore
  public deleteStudent(docId:string) {
    this.itemsCollection.doc(docId).delete();
  }
}