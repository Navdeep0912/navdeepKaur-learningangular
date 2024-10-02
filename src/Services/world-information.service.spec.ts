import { TestBed } from '@angular/core/testing';

import { WorldInformationService } from './world-information.service';

describe('WorldInformationService', () => {
  let service: WorldInformationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorldInformationService);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
