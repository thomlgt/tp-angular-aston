import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import { CommandComponent } from './command/command.component';
import { PriceComponent } from './price/price.component';

@NgModule({
  declarations: [ImagesComponent, CommandComponent, PriceComponent],
  imports: [
    CommonModule
  ]
})
export class JuveModule { }
