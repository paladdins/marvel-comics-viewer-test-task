import { Injectable } from '@angular/core';
import { Headers, Http, Response, RequestOptionsArgs } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from 'selenium-webdriver/http';
import { shareReplay, tap, map } from 'rxjs/operators';
import 'rxjs/add/observable/forkJoin';
import { Md5 } from 'ts-md5/dist/md5';

@Injectable()
export class MarvelApiService {
  private privateApiKey = 'a2070c97cf0b6e08a29a6369b9de7124f3edcfeb';
  private publicApiKey = 'fbd120b2a489ce0fa77a3cac9672fcc3';
  private apiHost = 'https://gateway.marvel.com/v1/public/';

  private cache = new Map();

  constructor(private http: Http) {}

  getData(url): Observable<Response> {
    if (!this.cache.has(url)) {
      return this.getDataRequest(url).pipe(
        map((response) => response.json()),
        tap((data) => {
          this.cache.set(url, data);
        })
      );
    }

    return new Observable((observer: any) => {
      observer.next(this.cache.get(url));
      observer.complete();
    });
  }

  private getDataRequest(url, args = {}): Observable<Response> {
    const accessParams = this.getAccessOptions();
    const params: RequestOptionsArgs = {
      params: {
        ...accessParams,
        ...args,
      },
    };
    url = this.apiHost + url;
    return this.http.get(url, params);
  }

  // Get required params to make an auth
  private getAccessOptions() {
    const ts = +new Date();
    const hash = Md5.hashStr(ts + this.privateApiKey + this.publicApiKey);
    const apikey = this.publicApiKey;
    return {
      ts,
      hash,
      apikey,
    };
  }
}
