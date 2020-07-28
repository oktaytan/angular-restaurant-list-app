import { Component } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public showSideNav = false;

  public searchForm = new FormGroup({
    query: new FormControl(""),
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  drawerToggle(drawer: any): void {
    this.showSideNav = !this.showSideNav;
    drawer.toggle();
  }

  closed() {
    this.showSideNav = false;
  }

  onSubmit() {
    if (!this.searchForm.value.query) {
      this.router.navigate(
        ["list"],
      );
    } else {
      this.router.navigate(
        ["search"],
        { queryParams: { q: this.searchForm.value.query } },
      );
      this.searchForm.reset();
    }
  }
}
