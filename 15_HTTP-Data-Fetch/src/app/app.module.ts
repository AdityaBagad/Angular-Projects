import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatafetchComponent } from './datafetch/datafetch.component';

//Import the Student Service
import { StudentsService } from './students.service';

// Import HttpClientModule
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    DatafetchComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [StudentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
