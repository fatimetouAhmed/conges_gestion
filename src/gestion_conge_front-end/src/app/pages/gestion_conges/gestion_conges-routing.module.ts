import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MdlListComponent} from "./components/mdl-list/mdl-list.component";
import { ServicesListeComponent } from './components/services-liste/services-liste.component';

const routes: Routes = [
  {
    path: "",
    component:ServicesListeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Gestion_congesRoutingModule { }
