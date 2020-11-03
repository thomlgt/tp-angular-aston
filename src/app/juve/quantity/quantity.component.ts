import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-quantity',
  templateUrl: './quantity.component.html',
  styleUrls: ['./quantity.component.css']
})
export class QuantityComponent implements OnInit {

  quantity = 1;

  @Output() sendQuantity = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  changeQuantity(qty) {
    this.quantity = qty.target.value;
    this.sendQuantity.emit();
  }

}
