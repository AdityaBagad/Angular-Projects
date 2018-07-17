import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DatabasesComponent } from './databases/databases.component';
import { OperatingsystemsComponent } from './operatingsystems/operatingsystems.component';
import { ProgramminglanguagesComponent } from './programminglanguages/programminglanguages.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DatabasesComponent,
    OperatingsystemsComponent,
    ProgramminglanguagesComponent,
    InvalidpageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
