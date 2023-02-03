import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AppGuard} from "../../services/app.guard";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AppGuard],
    children: [
      {
        path: 'apropos',
        loadChildren: () =>
          import('../apropos/apropos.module').then(
            (m) => m.AproposModule
          ),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'gestion_conges',
        loadChildren: () =>
          import('../gestion_conges/gestion_conges.module').then(
            (m) => m.Gestion_congesModule
          ),
      },
      {
        path: 'gestion_conges',
        loadChildren: () =>
          import('../gestion_conges/gestion_conges.module').then(
            (m) => m.Gestion_congesModule
          ),
      }, 
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
