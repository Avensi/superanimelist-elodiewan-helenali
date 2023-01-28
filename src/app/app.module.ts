import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnimeListComponent } from './animeList/anime-list/anime-list.component';
import { AnimeComponent } from './animeList/anime/anime.component';
import { ListComponent } from './list/list.component';
import { ReviewComponent } from './animeList/review/review.component';
import { AnimeCardComponent } from './animeList/anime-card/anime-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AnimeReviewComponent } from './animeList/anime-review/anime-review.component';
import {InterceptorService} from "./service/interceptor.service";
import { SpinnerComponent } from './spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {LogInComponent} from "./logIn/logIn.component";
import {ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import { LogoutComponent } from './logout/logout.component';

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
    ListComponent,
    ReviewComponent,
    AnimeCardComponent,
    AnimeReviewComponent,
    SpinnerComponent,
    LogoutComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
