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
  public notFound: boolean = false;

  constructor(
    private _resto: RestoService,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this._resto.searchRestaurants(this.route.snapshot.queryParams.q).subscribe(
      (data: any) => {
        if (data.length == 0) {
          this.notFound = true;
        } else {
          this.notFound = false;
          this.restaurants = data;
        }
      },
      (err) => console.log(err),
    );
  }
}
