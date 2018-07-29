import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Import 'environment.ts' from 'environments folder'
import { environment } from '../environments/environment';

// Import FireDatabase Module
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

// Components Required
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';

// Import the Forms Module
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DeleteStudentComponent,
    AddStudentComponent,
    UpdateStudentComponent,
    DisplayStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
