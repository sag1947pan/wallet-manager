import { TestBed } from '@angular/core/testing';

import { RegistrationServices } from './registration.services';

describe('RegistrationServices', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RegistrationServices = TestBed.get(RegistrationServices);
    expect(service).toBeTruthy();
  });
});
