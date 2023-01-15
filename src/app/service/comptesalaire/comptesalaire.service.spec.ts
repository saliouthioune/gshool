import { TestBed } from '@angular/core/testing';

import { ComptesalaireService } from './comptesalaire.service';

describe('ComptesalaireService', () => {
  let service: ComptesalaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComptesalaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
