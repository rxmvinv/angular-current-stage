import { TestBed } from '@angular/core/testing';

import { ApiInteractionService } from './api-interaction.service';

describe('ApiInteractionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiInteractionService = TestBed.get(ApiInteractionService);
    expect(service).toBeTruthy();
  });
});
