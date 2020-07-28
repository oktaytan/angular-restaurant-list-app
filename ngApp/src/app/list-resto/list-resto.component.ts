import { RestoService } from "./../resto.service";
import { Component, OnInit, ViewChild } from "@angular/core";

@Component({
  selector: "app-list-resto",
  templateUrl: "./list-resto.component.html",
  styleUrls: ["./list-resto.component.scss"],
})
export class ListRestoComponent implements OnInit {
  public restaurants: any[];

  constructor(
    private _resto: RestoService,
  ) {}

  ngOnInit(): void {
    this.getAllRestaurants();
  }

  getAllRestaurants() {
    this._resto.getAllList().subscribe(
      (data: any) => {
        this.restaurants = data;
      },
      (err) => console.log(err),
    );
  }

  toggleConfirm(id) {
    let confirmList = window.document.querySelectorAll(".confirm");

    confirmList.forEach((item) => {
      item.classList.remove("show");
      let index = item.id.indexOf("-");
      if (item.id.slice(index + 1) == id) {
        item.classList.toggle("show");
      }
    });
  }

  deleteResto(id) {
    this._resto.deleteRestaurant(id).subscribe(() => {
      this.getAllRestaurants();
      this.closeConfirm();
    });
  }

  closeConfirm() {
    let confirmList = window.document.querySelectorAll(".confirm");
    confirmList.forEach((item) => {
      item.classList.remove("show");
    });
  }
}
