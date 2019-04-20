import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

const BASE_URL = `https://api.openaq.org/v1/cities`;

@Injectable({
  providedIn: 'root'
})
export class AirService {

  constructor(private http: HttpClient) { }

  getUrl() {
    return `${BASE_URL}`;
  }

  getAirData() {
    return this.http.get<any>(this.getUrl())
      .pipe(map((res => res.results)));
  }
}
