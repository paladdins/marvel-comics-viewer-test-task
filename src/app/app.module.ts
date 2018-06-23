import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Pages
import { AppRoutingModule } from './app-routing.module';
import { PagesModule } from './pages/pages.module';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { MarvelApiService } from './services/marvel-api/marvel-api.service';
import { FavoritesService } from './services/favorites/favorites.service';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    PagesModule,
    AppRoutingModule,
    HttpModule,
    HttpClientModule,
  ],
  providers: [MarvelApiService, FavoritesService],
  bootstrap: [AppComponent],
})
export class AppModule {}
