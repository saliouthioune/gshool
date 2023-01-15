import { TestBed } from '@angular/core/testing';

import { AnneesService } from './annees.service';

describe('AnneesService', () => {
  let service: AnneesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnneesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
