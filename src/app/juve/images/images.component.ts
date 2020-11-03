import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  images = [
    "../../../assets/images/1.jpg",
    "../../../assets/images/2.jpg",
    "../../../assets/images/3.jpg",
    "../../../assets/images/4.jpg"
  ]

  currentImg = "../../../assets/images/1.jpg";

  constructor() { }

  ngOnInit(): void {
  }

  changeCurrentImg(image) {
    this.currentImg = image.target.value;
  }

}
