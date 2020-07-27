import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";

@Component({
  selector: "app-add-resto",
  templateUrl: "./add-resto.component.html",
  styleUrls: ["./add-resto.component.scss"],
})
export class AddRestoComponent implements OnInit {
  public restoForm = new FormGroup({
    name: new FormControl(""),
    email: new FormControl(""),
    description: new FormControl(""),
  });
  constructor() {}

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.restoForm.value);
  }
}
