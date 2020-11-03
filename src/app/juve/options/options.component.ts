import { Component, OnInit } from '@angular/core';
import { PlayersService } from 'src/app/juve/services/players.service';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  players = [];
  isFlocked = false;
  quantity = 1;

  constructor(private playersService : PlayersService) { }

  ngOnInit(): void {
    this.players = [...this.playersService.players];
  }

  changeFlockedStatus() {
    this.isFlocked ? this.isFlocked = false : this.isFlocked = true;
  }

  updateQuantity(qty) {
    this.quantity = qty;
  }
}
