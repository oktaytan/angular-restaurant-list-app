import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";
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
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "**", component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
