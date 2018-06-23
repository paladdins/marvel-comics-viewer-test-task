import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// Pages
import { ComicsDetailsComponent } from './comics-details/comics-details.component';
import { ComicsListComponent } from './comics-list/comics-list.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';

const pagesRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'comics-list',
  },
  {
    path: 'comics-list',
    component: ComicsListComponent,
  },
  {
    path: 'comics-details/:id',
    component: ComicsDetailsComponent,
  },
  {
    path: 'favorite',
    component: FavoriteComponent,
  },
  {
    path: 'heroes-details/:id',
    component: HeroDetailsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(pagesRoutes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
