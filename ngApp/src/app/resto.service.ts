import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class RestoService {
  constructor(private _http: HttpClient) {}

  private url: string = "http://localhost:3000/";

  getAllList() {
    return this._http.get(this.url + "restaurants");
  }

  getSingleRestaurant(id) {
    return this._http.get(this.url + "restaurants/" + id);
  }

  addRestaurant(data) {
    return this._http.post<any>(this.url + "restaurants", data);
  }

  updateRestaurant(id, data) {
    return this._http.put<any>(this.url + "restaurants/" + id, data);
  }
}
