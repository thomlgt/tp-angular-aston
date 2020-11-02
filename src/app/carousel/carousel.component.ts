import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  //LISTE D'IMAGES
  list : string[] = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/515px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    "https://images-na.ssl-images-amazon.com/images/I/81zGw-jTtML._AC_SY606_.jpg",
    "https://media.newyorker.com/photos/59d53edcae878c63a783a1e9/master/pass/171016_r30728.jpg"
  ]

  //IMAGE AFFICHEE
  currentImg : string = this.list[0];

  //COMPTEUR
  cpt : number = 1;

  constructor() { 
    this.updateImg();
  }

  ngOnInit(): void {
  }

  /**
   * Change l'image toutes les 3secondes
   */
  updateImg = () =>  {
    setInterval(() => {
      this.changeImgUrl();
    }, 3000)
  }

  /**
   * Change l'image 
   */
  changeImgUrl = () => {
    if(this.cpt == this.list.length){
      this.cpt = 0;
    }
    this.currentImg = this.list[this.cpt];
    this.cpt++;
  }

}
