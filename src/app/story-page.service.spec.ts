/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { StoryPageService } from './story-page.service';

describe('StoryPageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StoryPageService]
    });
  });

  it('should ...', inject([StoryPageService], (service: StoryPageService) => {
    expect(service).toBeTruthy();
  }));
});
