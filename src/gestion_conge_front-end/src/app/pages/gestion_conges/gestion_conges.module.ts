import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Gestion_congesRoutingModule } from './gestion_conges-routing.module';
import {SharedModule} from "../../common/shared/shared.module";
import {ServiceService} from "./services/service.service";
import { ServicesListeComponent } from './components/services-liste/services-liste.component';

@NgModule({
  declarations: [
    ServicesListeComponent
  ],
  imports: [
    CommonModule,
    Gestion_congesRoutingModule,
    SharedModule
  ],
  providers: [
    ServiceService
  ]
})
export class Gestion_congesModule { }
