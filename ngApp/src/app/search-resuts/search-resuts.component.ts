import { Component, OnInit } from "@angular/core";
import { RestoService } from "./../resto.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-search-resuts",
  templateUrl: "./search-resuts.component.html",
  styleUrls: ["./search-resuts.component.scss"],
})
export class SearchResutsComponent implements OnInit {
  public restaurants: any[];

  constructor(
    private _resto: RestoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._resto.searchRestaurants(this.route.snapshot.queryParams.q).subscribe(
      (data: any) => {
        this.restaurants = data;
      },
      (err) => console.log(err),
    );
  }
}
