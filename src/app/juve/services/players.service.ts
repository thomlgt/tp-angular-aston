import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  private _players = [
    {nom:"Chiellini", numero:3},
    {nom:"Ronaldo", numero:7},
    {nom:"Ramsey", numero:8},
    {nom:"Morata", numero:9},
    {nom:"Danilo", numero:13}
  ]

  constructor() { }

  get players() {
    return this._players;
  }
}
