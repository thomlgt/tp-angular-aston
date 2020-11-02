import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  isOn : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Affiche true ou false selon la position du bouton switch
   */
  changeBool = () => {
    if(this.isOn) {
      this.isOn = false;
      console.log(this.isOn);
    } else {
      this.isOn= true;
      console.log(this.isOn);
    }
  }

}
