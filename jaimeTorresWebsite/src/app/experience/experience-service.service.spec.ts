/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ExperienceServiceService } from './experience-service.service';

describe('Service: ExperienceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ExperienceServiceService]
    });
  });

  it('should ...', inject([ExperienceServiceService], (service: ExperienceServiceService) => {
    expect(service).toBeTruthy();
  }));
});
