import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { SubComponent1Component } from './sub-component1/sub-component1.component';
import { SubComponent2Component } from './sub-component2/sub-component2.component';
import { SubComponent3Component } from './sub-component3/sub-component3.component';

// Import the required service
import { BookService } from './book.service'; 

@NgModule({
  declarations: [
    AppComponent,
    SubComponent1Component,
    SubComponent2Component,
    SubComponent3Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [BookService], // Register name of our service
  bootstrap: [AppComponent]
})
export class AppModule { }
