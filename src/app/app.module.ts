import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RollerComponent } from './roller/roller.component';

//import { RollerModule } from './Roller/Roller.module';

@NgModule({
  declarations: [
    AppComponent,
    RollerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
