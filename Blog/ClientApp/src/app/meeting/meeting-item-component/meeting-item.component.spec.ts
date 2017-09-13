import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingItemComponent } from './meeting-item.component';

describe('MeetingItemComponentComponent', () => {
  let component: MeetingItemComponent;
  let fixture: ComponentFixture<MeetingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
