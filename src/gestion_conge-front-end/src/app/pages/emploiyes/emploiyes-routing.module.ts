import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmploiyesComponent } from './components/emploiyes/emploiyes.component';

const routes: Routes = [
  {
    path : "",
    component:EmploiyesComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmploiyesRoutingModule { }
