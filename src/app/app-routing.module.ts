import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./commons/error404/error404.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AnimeListComponent} from "./features/anime-list/anime-list.component";
import {AnimeComponent} from "./features/anime/anime.component";
import {ReactionsResolver} from "./resolver/reactions.resolver";
import {LogInComponent} from "./commons/logIn/logIn.component";
import {LogoutComponent} from "./commons/logout/logout.component";
import {FavoriteListComponent} from "./features/favorite-list/favorite-list.component";
import {AuthGuardService} from "./service/auth-guard.service";

const routes: Routes = [
  {path: 'animeList', component: AnimeListComponent},
  {path: 'anime/:id', component: AnimeComponent, resolve: {reactions:ReactionsResolver}},
  {path: 'favorite', component: FavoriteListComponent, canActivate: [AuthGuardService]},
  {path: 'login', component : LogInComponent},
  {path : 'logout', component : LogoutComponent},
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
