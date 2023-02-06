import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import { DemandeCongeComponent } from './components/demande-conge/demande-conge.component';
import { DemandeCongeRoutingModule } from './demandeConge-routing.module';
import { DemandeCongeService } from './services/demande-conge.service';


@NgModule({
  declarations: [
DemandeCongeComponent
  ],
  
  imports: [
    CommonModule,
    SharedModule,
    DemandeCongeRoutingModule
  ],
  providers: [
    DemandeCongeService
  ]
})
export class DemandeCongeModule { }
