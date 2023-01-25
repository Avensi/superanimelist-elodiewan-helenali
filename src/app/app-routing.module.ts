import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./error404/error404.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AnimeListComponent} from "./anime-list/anime-list.component";
import { SigningComponent } from './signin/signing.component';
import {ReviewComponent} from "./review/review.component";
import {ListComponent} from "./list/list.component";
import {AnimeComponent} from "./anime/anime.component";
import {AnimeCardComponent} from "./anime-card/anime-card.component";

const routes: Routes = [
  {path: 'animeList', component: AnimeListComponent},
  {path: 'anime/:id', component: AnimeComponent},
  {path: 'reviews', component: ReviewComponent},
  {path: 'list', component: ListComponent},
  {path: 'signIn', component : SigningComponent},
  {path: '', component: AccueilComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  declarations: [
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
