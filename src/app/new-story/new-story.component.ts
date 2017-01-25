import { Component, OnInit } from '@angular/core';
import { StoryPage } from '../story-page.model';
import { Router } from '@angular/router';
import { StoryPageService } from '../story-page.service';
import { PlayerService } from '../player.service';
import { Player } from '../player.model';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css'],
  providers: [StoryPageService, PlayerService]
})
export class NewStoryComponent implements OnInit {

  constructor(private router: Router, private storyPageService: StoryPageService, private playerService: PlayerService) { };
  public player: Player = this.playerService.getPlayer();

  ngOnInit() {
    this.playerService.getPlayer().name = "";
  };

  startStory(name: string): void{
    this.playerService.getPlayer().name = name;
    this.playerService.getPlayer().food = 100;
    this.router.navigate(['story', 1]);
  }
}
