import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { JuveComponent } from './juve/juve/juve.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { MorpionComponent } from './morpion/morpion.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {path: "switch", component: SwitchComponent},
  {path: "carousel", component: CarouselComponent},
  {path: "keyboard", component: KeyboardComponent},
  {path: "morpion", component: MorpionComponent},
  {path: "juve", component: JuveComponent},
  {path: "**", redirectTo:"switch"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
