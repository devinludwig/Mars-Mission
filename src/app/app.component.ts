import { Component, Input } from '@angular/core';
import { PlayerService } from './player.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PlayerService]
})

export class AppComponent {
  constructor(private playerService: PlayerService){}

  player = this.playerService.getPlayer();
}
