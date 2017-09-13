import { Injectable } from '@angular/core';
import { MeetingDto } from '../../dto/meeting-dto';

@Injectable()
export class GetMeetingsService {

  private meetingListTest: MeetingDto[] = new Array<MeetingDto>();

  constructor() {
    // тестовые данные
    var monPrac = new MeetingDto();
    this.meetingListTest.push(monPrac);
    monPrac.Id = 1;
    monPrac.Caption = "Ежедневная утренняя практика";
    monPrac.Description = "Утренняя практика для совместного пробуждения.";
    monPrac.ImgSrc = "holder.js/100px280/thumb";

    var threePrac = new MeetingDto();
    this.meetingListTest.push(threePrac);
    threePrac.Id = 2;
    threePrac.Caption = "Практика триединого здоровья";
    threePrac.Description = "Практика для трёхпланового оздоравления Человека.";
    threePrac.ImgSrc = "holder.js/100px280/thumb";

    var farPrac = new MeetingDto();
    this.meetingListTest.push(farPrac);
    farPrac.Id = 3;
    farPrac.Caption = "Занятие по 4 Аркану Священной магии";
    farPrac.Description = "Занятие по изучению 4 Аркана Магии по друководством Гайнулиной Айгуль.";
    farPrac.ImgSrc = "holder.js/100px280/thumb";

    var zorPrac = new MeetingDto();
    this.meetingListTest.push(zorPrac);
    zorPrac.Id = 4;
    zorPrac.Caption = "Встреча с Учителем Зором Алефом";
    zorPrac.Description = "Обсуждение и постановка намерения на Октябрь.";
    zorPrac.ImgSrc = "holder.js/100px280/thumb";
  }

  public GetMeetings(): MeetingDto[] {
    return this.meetingListTest;
  }

  public GetMeeting(id: number): MeetingDto {
    var meeting = this.meetingListTest.find(i => i.Id == id);
    return meeting;
  }
}
