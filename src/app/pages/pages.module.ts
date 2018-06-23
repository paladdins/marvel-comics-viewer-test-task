import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

// Pages
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

import { MaterialModule } from '../shared';

@NgModule({
  imports: [CommonModule, PagesRoutingModule, MaterialModule],
  declarations: [
    ComicsDetailsComponent,
    ComicsListComponent,
    FavoriteComponent,
    HeroDetailsComponent,
  ],
  exports: [PagesRoutingModule],
})
export class PagesModule {}
