/*
 * File: apivehicle.service.spec.ts
 * Authors: Hegedus Gyorgy
 * Copyright: 2022, Hegedus Gyorgy
 * Group: Szoft II/N
 * Date: 2022-02-24
 * Github: https://github.com/Gyuri21
 * Licenc: GNU GPL
*/
import { TestBed } from '@angular/core/testing';

import { ApivehicleService } from './apivehicle.service';

describe('ApivehicleService', () => {
  let service: ApivehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApivehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
