import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryPage } from '../story-page.model';
import { Router } from '@angular/router';
import { StoryPageService } from '../story-page.service';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

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
  public player: Player;

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private storyPageService: StoryPageService, private playerService: PlayerService) {
    this.player = this.playerService.getPlayer();
  }

  formatStory(story: string): string {
    return story.replace('@name', this.player.name);
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
    if (this.player.food <= 0) {
      this.player.food = 0;
      this.router.navigate(['story', 0]);
    } else {
      this.router.navigate(['story', id]);
      if (id===1) {
        this.player.food = 110;
      }
    }
    this.player.food -= 10;
  }

}
