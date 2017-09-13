import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MeetingItemComponent } from './meeting-item-component/meeting-item.component';
import { MeetingListComponent } from './meeting-list-component/meeting-list.component';
import { MeetingComponent } from './meeting-component/meeting.component';
import { GetMeetingsService } from './services/get-meetings.service';
import { MeetingRoutesModule } from './meeting-routes.module';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  imports: [
    CommonModule,
    MeetingRoutesModule,
    ChatModule
  ],
  declarations: [
    MeetingItemComponent,
    MeetingListComponent,
    MeetingComponent],
  providers: [
    GetMeetingsService],
})
export class MeetingModule { }
