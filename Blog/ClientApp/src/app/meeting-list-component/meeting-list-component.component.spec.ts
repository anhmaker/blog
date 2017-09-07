import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingListComponentComponent } from './meeting-list-component.component';

describe('MeetingListComponentComponent', () => {
  let component: MeetingListComponentComponent;
  let fixture: ComponentFixture<MeetingListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
