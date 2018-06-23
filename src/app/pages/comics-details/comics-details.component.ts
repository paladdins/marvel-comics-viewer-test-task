import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MarvelApiService } from '../../services/marvel-api/marvel-api.service';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-comics-details',
  templateUrl: './comics-details.component.html',
  styleUrls: ['./comics-details.component.css'],
})
export class ComicsDetailsComponent implements OnInit {
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

      this.marvelApi.getData('comics/' + id).subscribe((res: any) => {
        const result = res.data.results[0];
        const characters = result.characters.items.map((el: any) => {
          return {
            ...el,
            id: el.resourceURI.substr(el.resourceURI.lastIndexOf('/') + 1),
          };
        });

        this.isFavorite = this.favs.isFavorite('comics', result.id);

        this.dataSource = { ...result, heroes: characters };
        console.log(this.dataSource);
      });
    });
  }

  addComicsToFav(value) {
    this.favs.setFavorite('comics', value);
    this.isFavorite = true;
  }
}
