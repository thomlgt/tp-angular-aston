import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.css']
})
export class KeyboardComponent implements OnInit {

  numbers : any[] = [0,1,2,3,4,5,6,7,8,9, "-","-","-","-","-","-"];
  password : string = "";

  constructor() { }

  ngOnInit(): void {
    this.randomize(this.numbers);
  }

  /**
   * Rajoute le chiffre cliqué au mdp
   * @param event 
   */
  addNumber = (event) => {
    if(event.target.value != "-")
    this.password += event.target.value;
  }

  /**
   * Affiche le mdp en console
   */
  submit = () => {
    console.log(this.password);
  }

  /**
   * Mélange la liste de nombre de manière aléatoire
   * @param tab 
   */
  randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

}
