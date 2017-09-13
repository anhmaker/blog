import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MeetingDto } from '../../dto/meeting-dto';

@Component({
  selector: 'app-meeting-item',
  templateUrl: './meeting-item.component.html',
  styleUrls: ['./meeting-item.component.css']
})
export class MeetingItemComponent implements OnInit {
  @Input() meeting: MeetingDto;
  private route: Router;

  constructor(route: Router) {
    this.route = route;
  }

  ngOnInit() {
  }

  public Join() {
    this.route.navigate(['/meeting/' + this.meeting.Id]);
  }
}
