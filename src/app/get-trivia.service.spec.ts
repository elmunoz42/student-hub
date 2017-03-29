/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetTriviaService } from './get-trivia.service';

describe('GetTriviaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTriviaService]
    });
  });

  it('should ...', inject([GetTriviaService], (service: GetTriviaService) => {
    expect(service).toBeTruthy();
  }));
});
