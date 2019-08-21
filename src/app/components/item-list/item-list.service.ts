import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ItemListService {

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get('https://reqres.in/api/users');
  }

  getImages(url) {
    return this.http.get(`${url}`);
  }

}
