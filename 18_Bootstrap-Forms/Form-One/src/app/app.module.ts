import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BootstrapformComponent } from './bootstrapform/bootstrapform.component';

@NgModule({
  declarations: [
    AppComponent,
    BootstrapformComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
