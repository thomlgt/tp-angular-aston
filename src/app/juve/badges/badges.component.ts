import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-badges',
  templateUrl: './badges.component.html',
  styleUrls: ['./badges.component.css']
})
export class BadgesComponent implements OnInit {

  badges = [
    {nom:"badge1", url:"../../../assets/images/badge1.jpg"},
    {nom:"badge2", url:"../../../assets/images/badge2.png"},
    {nom:"badge3", url:"../../../assets/images/badge3.jpg"}
  ]

  @Output() suppPrice = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

}
