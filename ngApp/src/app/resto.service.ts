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
}
