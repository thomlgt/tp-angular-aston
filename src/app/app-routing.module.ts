import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarouselComponent } from './carousel/carousel.component';
import { KeyboardComponent } from './keyboard/keyboard.component';
import { SwitchComponent } from './switch/switch.component';

const routes: Routes = [
  {path: "switch", component: SwitchComponent},
  {path: "carousel", component: CarouselComponent},
  {path: "keyboard", component: KeyboardComponent},
  {path: "**", redirectTo:"switch"}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
