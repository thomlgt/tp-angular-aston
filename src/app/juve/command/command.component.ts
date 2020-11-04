import { Component, OnInit } from '@angular/core';

const UNIT_PRICE : number = 120;

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {

  badgesImg = [
    "../../../assets/images/badge1.jpg",
    "../../../assets/images/badge2.png",
    "../../../assets/images/badge3.jpg"
  ]

  numBadges : number = 0;

  quantity : number = 1;

  total : number = UNIT_PRICE;

  constructor() { }

  ngOnInit(): void {
  }

  changeQuantity(quantity) {
    this.quantity = parseInt(quantity.target.value);
    this.computeTotal()
  }

  selectBadge(badge) {
    let checked = badge.target.checked;
    if (checked) {
      this.numBadges += 1;
    } else {
      this.numBadges -= 1;
    }
    this.computeTotal();
  }

  private computeTotal() {
    this.total = (this.quantity * UNIT_PRICE) + (this.numBadges * 10 * this.quantity);
  }

}
