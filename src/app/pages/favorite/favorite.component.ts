import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css'],
})
export class FavoriteComponent implements OnInit {
  dataSource;
  toggleComicsHeroes = 'comics';
  constructor(private favs: FavoritesService) {}

  ngOnInit() {
    this.getData();
  }

  removeFav(type, index) {
    this.favs.removeFavorite(type, index);
    this.getData();
  }

  chooseComics() {
    this.toggleComicsHeroes = 'comics';
  }

  chooseHeroes() {
    this.toggleComicsHeroes = 'heroes';
  }

  getData() {
    const fav = this.favs.getFavorite();
    this.dataSource = { ...fav };
    console.log(this.dataSource);
  }
}
