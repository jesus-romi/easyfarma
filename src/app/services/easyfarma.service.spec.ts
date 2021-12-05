import { TestBed } from '@angular/core/testing';

import { EasyfarmaService } from './easyfarma.service';

describe('EasyfarmaService', () => {
  let service: EasyfarmaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasyfarmaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
