import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations`;

@Injectable({
  providedIn: 'root'
})
export class EmpiresService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  all() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res.civilizations)));
  }
}
