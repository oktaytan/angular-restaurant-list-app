import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  public showSideNav: boolean = false;

  drawerToggle(drawer) {
    this.showSideNav = !this.showSideNav;
    drawer.toggle();
  }

  closed() {
    this.showSideNav = false;
  }
}
