import { RestoService } from "./../resto.service";
import { Component, OnInit } from "@angular/core";

interface IRestaurant {
  id: number;
  name: string;
  address: string;
  email: string;
}

@Component({
  selector: "app-list-resto",
  templateUrl: "./list-resto.component.html",
  styleUrls: ["./list-resto.component.scss"],
})
export class ListRestoComponent implements OnInit {
  public restaurants: IRestaurant[];

  constructor(private _resto: RestoService) {}

  ngOnInit(): void {
    this._resto.getAllList().subscribe(
      (data) => this.restaurants = data,
      (err) => console.log(err),
    );
  }
}
