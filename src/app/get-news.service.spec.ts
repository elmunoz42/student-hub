/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GetNewsService } from './get-news.service';

describe('GetNewsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetNewsService]
    });
  });

  it('should ...', inject([GetNewsService], (service: GetNewsService) => {
    expect(service).toBeTruthy();
  }));
});
