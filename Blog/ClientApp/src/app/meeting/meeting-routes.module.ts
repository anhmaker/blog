import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { MeetingListComponent } from "./meeting-list-component/meeting-list.component";
import { MeetingComponent } from "./meeting-component/meeting.component";

@NgModule({
  imports: [
    [RouterModule.forChild([
      {
        path: 'meeting-list',
        component: MeetingListComponent,
      },
      {
        path: 'meeting/:id',
        component: MeetingComponent,
      }
    ])]
  ],
  declarations: [],
  exports: [RouterModule]
})
export class MeetingRoutesModule { }
