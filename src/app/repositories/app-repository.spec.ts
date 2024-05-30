import { TestBed } from '@angular/core/testing';

import { AppRepository } from './app-repository';

describe('AppRepository', () => {
  let service: AppRepository;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppRepository);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
