import { Component } from '@angular/core';

import { AngularFirestore } from 'angularfire2/firestore';
import { Observable} from 'rxjs';

@Component({
  selector: 'app-display-student',
  templateUrl: './display-student.component.html',
  styleUrls: ['./display-student.component.css']
})
export class DisplayStudentComponent {

  public items: Observable<any[]>;

    constructor(db: AngularFirestore) {
        this.items = db.collection('/Stud_Info').valueChanges();
    }
}
