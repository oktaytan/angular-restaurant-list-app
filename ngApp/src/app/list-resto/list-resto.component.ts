import { RestoService } from "./../resto.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-list-resto",
  templateUrl: "./list-resto.component.html",
  styleUrls: ["./list-resto.component.scss"],
})
export class ListRestoComponent implements OnInit {
  public restaurants: any[];

  constructor(private _resto: RestoService) {}

  ngOnInit(): void {
    this._resto.getAllList().subscribe(
      (data: any) => {
        this.restaurants = data;
      },
      (err) => console.log(err),
    );
  }
}
