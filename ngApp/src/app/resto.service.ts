import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RestoService {
  constructor(private _http: HttpClient) {}

  private url: string = "http://localhost:3000/restaurants/";

  getAllList() {
    return this._http.get(this.url);
  }

  getSingleRestaurant(id) {
    return this._http.get(this.url + id);
  }

  addRestaurant(data) {
    return this._http.post<any>(this.url, data);
  }

  updateRestaurant(id, data) {
    return this._http.put<any>(this.url + id, data);
  }

  searchRestaurants(query) {
    return this._http.get(this.url + "?q=" + query);
  }

  deleteRestaurant(id) {
    return this._http.delete(this.url + id);
  }
}
