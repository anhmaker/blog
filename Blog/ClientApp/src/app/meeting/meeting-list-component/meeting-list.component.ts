import { Component, OnInit, Injectable } from '@angular/core';
import { GetMeetingsService } from '../services/get-meetings.service';
import { MeetingDto } from  '../../dto/meeting-dto';

@Component({
  selector: 'app-meeting-list',
  templateUrl: './meeting-list.component.html',
  styleUrls: ['./meeting-list.component.css']
})
export class MeetingListComponent implements OnInit {

  public meetingListTest: MeetingDto[] = new Array<MeetingDto>();
  private getMeetingsService: GetMeetingsService;

  constructor(getMeetingsService: GetMeetingsService) {
    this.getMeetingsService = getMeetingsService;
  }

  ngOnInit() {
    this.meetingListTest = this.getMeetingsService.GetMeetings();
  }
}
