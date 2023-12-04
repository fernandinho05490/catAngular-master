import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { LuckCatComponent } from "./component/luck-cat/luck-cat.component";
import { DogBreedsComponent } from "./component/cat-breeds/cat-breeds.component";

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'luckyy', component: LuckCatComponent },
  { path: 'breeds', component: DogBreedsComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
