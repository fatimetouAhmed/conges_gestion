import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppGuard} from "../../services/app.guard";

const routes: Routes = [
  {
    path: '',

    canActivate: [AppGuard],
    children: [
   
      {
        path: 'services',
        loadChildren: () =>
          import('../services/services.module').then(
            (m) => m.ServicesModule
          ),
      },
      {
        path: 'typeConges',
        loadChildren: () =>
          import('../type_conges/type_conges.module').then(
            (m) => m.Type_congesModule
          ),
      },
      {
        path: 'empoiyes',
        loadChildren: () =>
          import('../emploiyes/emploiyes.module').then(
            (m) => m.EmploiyesModule
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
        path: 'conges',
        loadChildren: () =>
          import('../conges/conges.module').then(
            (m) => m.CongesModule
          ),
      },
      {
        path: 'demandeConge',
        loadChildren: () =>
          import('../demandeConge/demandeConge.module').then(
            (m) => m.DemandeCongeModule
          ),
      },
     {
      path: 'congesConfirmer',
      loadChildren: () =>
        import('../congesConfirmer/congesConfirmer.module').then(
          (m) => m.CongesConfirmerModule
        ),
    },
    {
      path: 'congesRefuser',
      loadChildren: () =>
        import('../congesRefuser/congesRefuser.module').then(
          (m) => m.CongesRefuserModule
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
