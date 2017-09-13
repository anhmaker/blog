import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetingModule } from './meeting/meeting.module';
import { AppRoutesModule } from './app-routes.module';

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutesModule,
    MeetingModule
  ],
  providers: []
})
export class AppModule { }
