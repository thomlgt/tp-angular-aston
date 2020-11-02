import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  numbers : number[] = [0,1,2,3,4,5,6,7,8,9];
  password : string = "";

  constructor() { }

  ngOnInit(): void {
  }

  addNumber = (event) => {
    this.password += event.target.value;
  }

  submit = () => {
    console.log(this.password);
  }

}
