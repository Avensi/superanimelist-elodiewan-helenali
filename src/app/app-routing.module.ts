import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Error404Component} from "./error404/error404.component";
import {AccueilComponent} from "./accueil/accueil.component";
import {AnimeListComponent} from "./anime-list/anime-list.component";
import {SigningComponent} from "./signin/signing.component";

const routes: Routes = [
  {path: 'animeList', component: AnimeListComponent},
  {path: 'signIn', component : SigningComponent},
  {path: '', component: AccueilComponent},
  {path: '**', component: Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
