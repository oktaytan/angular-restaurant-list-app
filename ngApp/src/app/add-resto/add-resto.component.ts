import { Router } from "@angular/router";
import { RestoService } from "./../resto.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-add-resto",
  templateUrl: "./add-resto.component.html",
  styleUrls: ["./add-resto.component.scss"],
})
export class AddRestoComponent implements OnInit {
  public restoForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(100),
    ]),
  });

  constructor(private restoService: RestoService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit() {
    this.restoService
      .addRestaurant(this.restoForm.value)
      .subscribe((addedResto) => {
        this.router.navigate(["/list"]);
      });
  }

  getErrorName() {
    if (this.restoForm.controls.name.hasError("required")) {
      return "Name is required";
    }
  }
  getErrorEmail() {
    if (this.restoForm.controls.email.hasError("required")) {
      return "Email is required";
    }
    return this.restoForm.controls.email.hasError("email")
      ? "Not a valid email"
      : "";
  }
  getErrorDesc() {
    if (this.restoForm.controls.description.hasError("required")) {
      return "Description is required";
    }
    return this.restoForm.controls.description.hasError("minlength")
      ? "Description must be at least 100 characters"
      : "";
  }
}
