import { Injectable } from '@angular/core';
import { StoryPage } from './story-page.model';
import { STORYPAGES } from './story-pages';

@Injectable()
export class StoryPageService {

  constructor() { }

  getStoryPageById(storyPageId: number): StoryPage{
    for (var i=0; i<STORYPAGES.length; i++) {
      if (STORYPAGES[i].id === storyPageId) {
        return STORYPAGES[i];
      }
    }
  }
}
