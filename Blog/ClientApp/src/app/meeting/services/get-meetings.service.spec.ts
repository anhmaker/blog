import { TestBed, inject } from '@angular/core/testing';

import { GetMeetingsService } from './get-meetings.service';

describe('GetMeetingsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetMeetingsService]
    });
  });

  it('should be created', inject([GetMeetingsService], (service: GetMeetingsService) => {
    expect(service).toBeTruthy();
  }));
});
