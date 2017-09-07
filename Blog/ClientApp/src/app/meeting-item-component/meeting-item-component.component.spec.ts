import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetingItemComponentComponent } from './meeting-item-component.component';

describe('MeetingItemComponentComponent', () => {
  let component: MeetingItemComponentComponent;
  let fixture: ComponentFixture<MeetingItemComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MeetingItemComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MeetingItemComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
