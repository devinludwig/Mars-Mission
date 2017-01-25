import { Injectable } from '@angular/core';
import { Player } from './player.model';
import { player } from './player';

@Injectable()
export class PlayerService {
  constructor(){}
  getPlayer(){
    return player;
  }
}
