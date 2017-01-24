import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryPage } from '../story-page.model';
import { Router } from '@angular/router';
import { StoryPageService } from '../story-page.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryPageService, PlayerService]
})

export class StoryComponent implements OnInit {
  public storyPageToDisplay: StoryPage;
  public storyPageId: number = null;
  public imageUrl: string = "";
  public formattedStory: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private storyPageService: StoryPageService, private playerService: PlayerService) {
    this.storyPageToDisplay = null;
    this.storyPageId = null;
    this.imageUrl = "";
    // router.routerState.params.subscribe(data => console.log('check'));
  }

  formatStory(story: string): string {
    return story.replace('@name', this.playerService.getName());
  }

  ngOnInit() {
    this.route.params.forEach((urlParametersArray) => {
      this.storyPageId = parseInt(urlParametersArray['id']);
      this.storyPageToDisplay = this.storyPageService.getStoryPageById(this.storyPageId);
      this.imageUrl = this.storyPageToDisplay.imageUrl;
      this.formattedStory = this.formatStory(this.storyPageToDisplay.story);
    });
  }

  navigateTo(id: number): void{
    this.router.navigate(['story', id]);
  }

}
