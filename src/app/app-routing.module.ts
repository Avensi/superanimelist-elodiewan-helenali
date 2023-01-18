import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./error404/error404.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AnimeListComponent} from "./anime-list/anime-list.component";
import {ReviewComponent} from "./review/review.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {path: 'animeList', component: AnimeListComponent},
  {path: 'reviews', component: ReviewComponent},
  {path: 'list', component: ListComponent},
  {path: '', component: AccueilComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
