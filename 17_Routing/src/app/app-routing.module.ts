import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DatabasesComponent } from './databases/databases.component';
import { OperatingsystemsComponent } from './operatingsystems/operatingsystems.component';
import { ProgramminglanguagesComponent } from './programminglanguages/programminglanguages.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

const routes: Routes = [
  // All the Pages 
  { path : 'databases', component : DatabasesComponent},
  { path : 'operatingsystems', component : OperatingsystemsComponent},
  { path : 'programminglanguages', component : ProgramminglanguagesComponent},

  // Add Default Path
  { path : '', component : DatabasesComponent},

  // Wildcard Component
  { path : '**', component : InvalidpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
