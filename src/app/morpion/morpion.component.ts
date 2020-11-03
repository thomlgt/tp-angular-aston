import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-morpion',
  templateUrl: './morpion.component.html',
  styleUrls: ['./morpion.component.css']
})
export class MorpionComponent implements OnInit {
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  turn : number = 1;

  

}
