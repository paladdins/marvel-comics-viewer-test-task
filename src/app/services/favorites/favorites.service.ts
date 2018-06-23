import { Injectable } from '@angular/core';

@Injectable()
export class FavoritesService {
  private data = {};

  constructor() {
    const data = window.localStorage.getItem('favorites');
    if (data) {
      this.data = JSON.parse(data);
    } else {
      this.data = { heroes: [], comics: [] };
    }
  }

  getFavorite() {
    return this.data;
  }

  setFavorite(type: string, value: object): void {
    this.data[type].push(value);

    this.setToStorage();
  }

  removeFavorite(type, index): void {
    this.data[type].splice(index, 1);

    this.setToStorage();
  }

  isFavorite(type, id): boolean {
    const found = this.data[type].filter((el) => el.id === id);

    return found && found.length > 0;
  }

  private setToStorage(): void {
    window.localStorage.setItem('favorites', JSON.stringify(this.data));
  }
}
