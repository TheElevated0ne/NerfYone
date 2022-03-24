import { TestBed } from '@angular/core/testing';

import { PatchingService } from './patching.service';

describe('PatchingService', () => {
  let service: PatchingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatchingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
