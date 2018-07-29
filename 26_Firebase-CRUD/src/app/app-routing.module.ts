import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components Required for Routing
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';
import { DisplayStudentComponent } from './display-student/display-student.component';

const routes: Routes = [
  // All the Pages
  { path: 'add-student', component: AddStudentComponent },
  { path: 'update-student', component: UpdateStudentComponent },
  { path: 'delete-student', component: DeleteStudentComponent },
  { path: 'display-student', component: DisplayStudentComponent },

  // Add default Page which is the display Page
  { path: '', component: DisplayStudentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
