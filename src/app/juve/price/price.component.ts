import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit, OnChanges {

  price = 0;

  @Input() isFlocked : boolean;
  @Input() quantity : number;

  constructor() { }

  ngOnInit(): void {
    this.calculatePrice(this.isFlocked, this.quantity);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.quantity = changes.quantity.currentValue;
  }

  calculatePrice(isFlocked, quantity) {
    let flockedPrice = isFlocked?10:0;
    this.price = quantity * (120 + flockedPrice);
  }

}
