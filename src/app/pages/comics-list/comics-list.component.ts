import { Component, OnInit } from '@angular/core';
import { MarvelApiService } from '../../services/marvel-api/marvel-api.service';
import { FavoritesService } from '../../services/favorites/favorites.service';

@Component({
  selector: 'app-comics-list',
  templateUrl: './comics-list.component.html',
  styleUrls: ['./comics-list.component.css'],
})
export class ComicsListComponent implements OnInit {
  dataSource;
  constructor(private marvelApi: MarvelApiService) {}

  ngOnInit() {
    this.marvelApi.getData('comics').subscribe((res: any) => {
      this.dataSource = [...res.data.results];
    });
  }
}
