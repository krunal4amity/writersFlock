import { TestBed } from '@angular/core/testing';

import { ComprehendService } from './comprehend.service';

describe('ComprehendService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ComprehendService = TestBed.get(ComprehendService);
    expect(service).toBeTruthy();
  });
});
