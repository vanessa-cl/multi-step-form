import { TestBed } from '@angular/core/testing';

import { FormValidationsService } from './form-validations.service';

describe('FormValidationsService', () => {
  let service: FormValidationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormValidationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
