import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MeetingItemComponentComponent } from './meeting-item-component/meeting-item-component.component';
import { MeetingListComponentComponent } from './meeting-list-component/meeting-list-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MeetingItemComponentComponent,
    MeetingListComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
