import { TestBed } from '@angular/core/testing';

import { SubmitService } from './submit-form.service';

describe('SubmitFormService', () => {
  let service: SubmitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
