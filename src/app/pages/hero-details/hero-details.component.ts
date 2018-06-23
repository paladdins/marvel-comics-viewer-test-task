import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api/marvel-api.service';
import { ActivatedRoute } from '@angular/router';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
})
export class HeroDetailsComponent implements OnInit {
  dataSource;
  isFavorite: boolean;
  constructor(
    private route: ActivatedRoute,
    private marvelApi: MarvelApiService,
    private favs: FavoritesService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const id = +params['id'];

      this.marvelApi.getData('characters/' + id).subscribe((res: any) => {
        const source = res.data.results[0];
        const comicsItems = source.comics.items.map((el) => {
          return {
            ...el,
            id: el.resourceURI.substr(el.resourceURI.lastIndexOf('/') + 1),
          };
        });

        this.isFavorite = this.favs.isFavorite('heroes', source.id);

        this.dataSource = { ...source, comicsItems };
        console.log(this.dataSource);
      });
    });
  }

  addHeroToFav(value) {
    this.favs.setFavorite('heroes', value);
    this.isFavorite = true;
  }
}
