import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://api.opendota.com/api/teams`;

@Injectable({
  providedIn: 'root'
})
export class Dota2Service {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res)));
  }
}
