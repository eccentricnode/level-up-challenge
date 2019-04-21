import { TestBed } from '@angular/core/testing';

import { EmpiresService } from './empires.service';

describe('EmpiresService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmpiresService = TestBed.get(EmpiresService);
    expect(service).toBeTruthy();
  });
});
