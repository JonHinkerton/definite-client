import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule, MatSelectModule } from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { RollerComponent } from './roller/roller.component';

//import { RollerModule } from './Roller/Roller.module';

@NgModule({
  declarations: [
    AppComponent,
    RollerComponent
  ],
  imports: [
    BrowserModule, MatFormFieldModule, MatInputModule, MatSelectModule, BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
