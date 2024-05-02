import { TestBed } from '@angular/core/testing';

import { PopupMService } from './popup-m.service';

describe('PopupMService', () => {
  let service: PopupMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PopupMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
