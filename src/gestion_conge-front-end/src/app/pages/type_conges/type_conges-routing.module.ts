import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TypeCongesComponent } from './components/type-conges/type-conges.component';
const routes: Routes = [
  {
    path : "",
    component:TypeCongesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Type_congesRoutingModule { }
