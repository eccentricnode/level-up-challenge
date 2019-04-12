import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

import { Starships } from './starships.model';

const BASE_URL = `https://swapi.co/api/starships/`;

@Injectable({
  providedIn: 'root'
})
export class StarshipsService {

  constructor(private http: HttpClient) { }
  
  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get(this.getUrl())
      .pipe(map((res: {results: Starships[]}) => res.results));
  }
}
