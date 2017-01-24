import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { WelcomeComponent } from './welcome/welcome.component';
import { NewStoryComponent } from './new-story/new-story.component';
import { StoryComponent } from './story/story.component';
import { StoryTileComponent } from './story-tile/story-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NewStoryComponent,
    StoryComponent,
    StoryTileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
