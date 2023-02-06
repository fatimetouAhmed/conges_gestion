import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongesComponent } from './components/conges/conges.component';

const routes: Routes = [
  {
    path : "",
    component:CongesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongesRoutingModule { }
