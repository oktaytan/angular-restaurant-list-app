import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import { RestoService } from "./../resto.service";

@Component({
  selector: "app-update-resto",
  templateUrl: "./update-resto.component.html",
  styleUrls: ["./update-resto.component.scss"],
})
export class UpdateRestoComponent implements OnInit {
  public restoForm = new FormGroup({
    name: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.email]),
    description: new FormControl("", [
      Validators.required,
      Validators.minLength(100),
    ]),
  });

  constructor(
    private restoService: RestoService,
    private router: Router,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.restoService.getSingleRestaurant(this.route.snapshot.params.id)
      .subscribe((data) => {
        this.restoForm.controls.name.setValue(data["name"]);
        this.restoForm.controls.email.setValue(data["email"]);
        this.restoForm.controls.description.setValue(data["description"]);
      });
  }

  onSubmit() {
    this.restoService
      .updateRestaurant(this.route.snapshot.params.id, this.restoForm.value)
      .subscribe((updatedResto) => {
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
