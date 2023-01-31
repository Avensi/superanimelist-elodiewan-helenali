import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./commons/error404/error404.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AnimeListComponent} from "./features/anime-list/anime-list.component";
import {ReviewComponent} from "./review/review.component";
import {ListComponent} from "./list/list.component";
import {AnimeComponent} from "./features/anime/anime.component";
import {ReactionsResolver} from "./resolver/reactions.resolver";
import {LogInComponent} from "./logIn/logIn.component";
import {LogoutComponent} from "./logout/logout.component";

const routes: Routes = [
  {path: 'animeList', component: AnimeListComponent},
  {path: 'anime/:id', component: AnimeComponent, resolve: {reactions:ReactionsResolver}},
  {path: 'reviews', component: ReviewComponent},
  {path: 'list', component: ListComponent},
  {path: 'signIn', component : LogInComponent},
  {path : 'logOut', component : LogoutComponent},
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
