import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MorpionComponent } from './morpion/morpion.component';
import { BadgesComponent } from './juve/badges/badges.component';
import { ImagesComponent } from './juve/images/images.component';
import { OptionsComponent } from './juve/options/options.component';
import { PriceComponent } from './juve/price/price.component';
import { QuantityComponent } from './juve/quantity/quantity.component';
import { JuveComponent } from './juve/juve/juve.component';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    NavbarComponent,
    CarouselComponent,
    KeyboardComponent,
    MorpionComponent,
    BadgesComponent,
    ImagesComponent,
    OptionsComponent,
    PriceComponent,
    QuantityComponent,
    JuveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
