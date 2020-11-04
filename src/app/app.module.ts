import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SwitchComponent } from './switch/switch.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MorpionComponent } from './morpion/morpion.component';
import { JuveModule } from './juve/juve.module';

@NgModule({
  declarations: [
    AppComponent,
    SwitchComponent,
    NavbarComponent,
    CarouselComponent,
    KeyboardComponent,
    MorpionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    JuveModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
