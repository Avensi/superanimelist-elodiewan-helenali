import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './commons/header/header.component';
import {FooterComponent} from './commons/footer/footer.component';
import {Error404Component} from './commons/error404/error404.component';
import {AccueilComponent} from './accueil/accueil.component';
import {AnimeListComponent} from './features/anime-list/anime-list.component';
import {AnimeComponent} from './features/anime/anime.component';
import {AnimeCardComponent} from './features/anime-card/anime-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AnimeReviewComponent} from './features/anime-review/anime-review.component';
import {InterceptorService} from "./service/interceptor.service";
import {SpinnerComponent} from './commons/spinner/spinner.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {LogInComponent} from "./commons/logIn/logIn.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {ReviewListComponent} from './features/review-list/review-list.component';
import {AnimeStatsComponent} from './features/anime-stats/anime-stats.component';
import {BackArrowComponent} from './commons/back-arrow/back-arrow.component';
import {MatSelectModule} from "@angular/material/select";
import {FormsModule} from "@angular/forms";
import {AddRatingComponent} from './features/add-rating/add-rating.component';
import {LogoutComponent} from './commons/logout/logout.component';
import {ReviewInputComponent} from "./features/review-input/review-input.component";
import { FavoriteButtonComponent } from './features/favorite-button/favorite-button.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { FavoriteListComponent } from './features/favorite-list/favorite-list.component';
import { FavoriteAnimeCardComponent } from './features/favorite-anime-card/favorite-anime-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    AccueilComponent,
    AnimeListComponent,
    LogInComponent,
    AnimeComponent,
    AnimeCardComponent,
    AnimeReviewComponent,
    SpinnerComponent,
    LogoutComponent,
    ReviewInputComponent,
    ReviewListComponent,
    AnimeStatsComponent,
    BackArrowComponent,
    AddRatingComponent,
    FavoriteButtonComponent,
    FavoriteListComponent,
    FavoriteAnimeCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatButtonModule,
    MatIconModule,
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
