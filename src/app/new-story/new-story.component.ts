import { Component, OnInit } from '@angular/core';
import { StoryPage } from '../story-page.model';
import { Router } from '@angular/router';
import { StoryPageService } from '../story-page.service';

@Component({
  selector: 'app-new-story',
  templateUrl: './new-story.component.html',
  styleUrls: ['./new-story.component.css'],
  providers: [StoryPageService]
})
export class NewStoryComponent implements OnInit {
  constructor(private router: Router, private storyPageService: StoryPageService) { };

  ngOnInit() {
  };

  startStory(name: string): void{
    this.router.navigate(['story', 1]);
  }
}
