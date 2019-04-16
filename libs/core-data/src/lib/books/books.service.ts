import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { map } from 'rxjs/operators';

const API_KEY = `AIzaSyB4Oq6vsu9UuN1AcgURHbhKyDrwrDu5SPw`;

const BASE_URL = `https://www.googleapis.com/books/v1/volumes?q=intitle%2C+inauthor%2C+subject%2C+isbn&maxResults=20&fields=items(id%2CvolumeInfo(authors%2Ccategories%2Cdescription%2CimageLinks%2Fthumbnail%2Csubtitle%2Ctitle))&key=${API_KEY}`;

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  searchBooksApi(str) {
    let params = new HttpParams();
    params = params.append('q', str);
    return this.http.get<any>(`${BASE_URL}`, { params })
      .pipe(map(res => res));
  }
}
