import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Pokemon } from './pokemon.model';
import { PokemonMeta } from './pokemon-meta.model';

const BASE_URL = `https://pokeapi.co/api/v2/pokemon/`

@Injectable({
  providedIn: 'root'
}) 
export class PokemonService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  getUrlWithId(pokemon): Observable<PokemonMeta> {
    console.log(pokemon);
    return this.http.get<PokemonMeta>(pokemon);
  }

  all() {
    return this.http.get(this.getUrl())
      .pipe(map((res: {results: Pokemon[]}) => res.results));
  }
}
