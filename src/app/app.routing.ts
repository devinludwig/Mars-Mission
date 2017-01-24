import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewStoryComponent } from './new-story/new-story.component';
import { StoryComponent } from './story/story.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'new-story',
    component: NewStoryComponent
  },
  {
    path: 'story/:id',
    component: StoryComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
