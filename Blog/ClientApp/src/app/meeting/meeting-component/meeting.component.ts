import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GetMeetingsService } from '../services/get-meetings.service';
import { MeetingDto } from '../../dto/meeting-dto';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent implements OnInit {
  private getMeetingsService: GetMeetingsService;
  private meetingId: number;
  private activatedRoute: ActivatedRoute;
  private router: Router;

  public meeting: MeetingDto;

  constructor(getMeetingsService: GetMeetingsService,
    activatedRoute: ActivatedRoute,
    router: Router) {
    this.getMeetingsService = getMeetingsService;
    this.activatedRoute = activatedRoute;
    this.router = router;
  };

  ngOnInit() {
    this.meetingId = this.activatedRoute.params['id'];
    this.activatedRoute.params.subscribe((params: Params) => {
      this.meetingId = params['id'];
      let meeting = this.getMeetingsService.GetMeeting(this.meetingId);
      if (meeting){
        this.meeting = meeting;
      }
      else{
        this.router.navigate(['/meeting-list']);
      }
    });
  }
}
