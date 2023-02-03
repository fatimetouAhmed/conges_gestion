import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServicesListeComponent } from './pages/gestion_conges/components/services-liste/services-liste.component';
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";


const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/layouts/layouts.module').then(
        (m) => m.LayoutsModule
      ),
  },
  {path: '**', redirectTo: '404'},
  {path: '404', component: PageNotFoundComponent},
  { path: 'services', component: ServicesListeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
