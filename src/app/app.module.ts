import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { Error404Component } from './error404/error404.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import {ReactiveFormsModule} from "@angular/forms";
import {SigningComponent} from "./signin/signing.component";
import { AnimeComponent } from './anime/anime.component';
import { ListComponent } from './list/list.component';
import { ReviewComponent } from './review/review.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import { AnimeReviewComponent } from './anime-review/anime-review.component';
import {InterceptorService} from "./service/interceptor.service";
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Error404Component,
    AccueilComponent,
    AnimeListComponent,
    SigningComponent,
    AnimeComponent,
    ListComponent,
    ReviewComponent,
    AnimeCardComponent,
    AnimeReviewComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:InterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
