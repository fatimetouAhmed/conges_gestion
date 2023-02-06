import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeCongeComponent } from './components/demande-conge/demande-conge.component';
const routes: Routes = [
  {
    path : "", 
    component:DemandeCongeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeCongeRoutingModule { }
