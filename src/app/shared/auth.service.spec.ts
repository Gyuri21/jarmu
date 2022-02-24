/*
 * File: auth.service.spec.ts
 * Authors: Hegedus Gyorgy
 * Copyright: 2022, Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2022-02-24
 * Github: https://github.com/Gyuri21
 * Licenc: GNU GPL
*/
import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
