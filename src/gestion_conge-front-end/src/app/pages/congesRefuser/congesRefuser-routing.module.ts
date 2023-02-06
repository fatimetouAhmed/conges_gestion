import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CongesRefuserComponent } from './components/conges-refuser/conges-refuser.component';

const routes: Routes = [
  {
    path : "",
    component: CongesRefuserComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CongesRefuserRoutingModule { }
