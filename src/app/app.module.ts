import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './commons/header/header.component';
import { FooterComponent } from './commons/footer/footer.component';
import { Error404Component } from './commons/error404/error404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnimeListComponent } from './features/anime-list/anime-list.component';
import { AnimeComponent } from './features/anime/anime.component';
import { ListComponent } from './list/list.component';
import { ReviewComponent } from './review/review.component';
import { AnimeCardComponent } from './features/anime-card/anime-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AnimeReviewComponent } from './features/anime-review/anime-review.component';
import {InterceptorService} from "./service/interceptor.service";
import { SpinnerComponent } from './commons/spinner/spinner.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from "@angular/material/tabs";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatExpansionModule} from "@angular/material/expansion";
import { ReviewListComponent } from './features/review-list/review-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    AccueilComponent,
    AnimeListComponent,
    AnimeComponent,
    ListComponent,
    ReviewComponent,
    AnimeCardComponent,
    AnimeReviewComponent,
    SpinnerComponent,
    ReviewListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatPaginatorModule,
    MatExpansionModule
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
