import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoryPage } from '../story-page.model';
import { Router } from '@angular/router';
import { StoryPageService } from '../story-page.service';
import { PlayerService } from '../player.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css'],
  providers: [StoryPageService, PlayerService]
})
export class NewStoryComponent implements OnInit {
  @Output() newNameSender = new EventEmitter();

  constructor(private router: Router, private storyPageService: StoryPageService, private playerService: PlayerService) { };

  ngOnInit() {
  };

  startStory(name: string): void{
    this.playerService.setName(name);
    this.newNameSender.emit(name);
    this.router.navigate(['story', 1]);
  }
}
