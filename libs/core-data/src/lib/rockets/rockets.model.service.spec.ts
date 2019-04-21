import { TestBed } from '@angular/core/testing';

import { Rockets.ModelService } from './rockets.model.service';

describe('Rockets.ModelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Rockets.ModelService = TestBed.get(Rockets.ModelService);
    expect(service).toBeTruthy();
  });
});
