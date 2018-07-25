import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';

// Import the required service
import { BookService } from './book.service'; 

@NgModule({
  declarations: [
    AppComponent,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    MatTableModule
  ],
  providers: [BookService], // Register name of our service
  bootstrap: [AppComponent]
})
export class AppModule { }
