import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { StoryPage } from '../story-page.model';
import { Router } from '@angular/router';
import { StoryPageService } from '../story-page.service';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css'],
  providers: [StoryPageService]
})

export class StoryComponent implements OnInit {
  public storyPageToDisplay: StoryPage;
  public storyPageId: number = null;
  public imageUrl: string = "";

  constructor(private router: Router, private route: ActivatedRoute, private location: Location, private storyPageService: StoryPageService, ) {
    this.storyPageToDisplay = null;
    this.storyPageId = null;
    this.imageUrl = "";
    console.log(router.routerState);
    // router.routerState.params.subscribe(data => console.log('check'));
  }

  ngOnInit() {
    console.log("initialized");
    this.route.params.forEach((urlParametersArray) => {
      this.storyPageId = parseInt(urlParametersArray['id']);
    });

    this.storyPageToDisplay = this.storyPageService.getStoryPageById(this.storyPageId);
    this.imageUrl = this.storyPageToDisplay.imageUrl;
    this.route.params.subscribe(params => {
      this.paramsChanged(params['id']);
    });
  }

  paramsChanged(id) {
    this.storyPageToDisplay = this.storyPageService.getStoryPageById(this.storyPageId);
    this.storyPageId = parseInt(id);
    this.imageUrl = this.storyPageToDisplay.imageUrl;
  }

  navigateTo(id: number): void{
    this.router.navigate(['story', id]);
  }

}
