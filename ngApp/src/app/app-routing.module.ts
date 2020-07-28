import { SearchResutsComponent } from "./search-resuts/search-resuts.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { UpdateRestoComponent } from "./update-resto/update-resto.component";
import { AddRestoComponent } from "./add-resto/add-resto.component";
import { ListRestoComponent } from "./list-resto/list-resto.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "list", component: ListRestoComponent },
  { path: "add", component: AddRestoComponent },
  { path: "update/:id", component: UpdateRestoComponent },
  { path: "search", component: SearchResutsComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
