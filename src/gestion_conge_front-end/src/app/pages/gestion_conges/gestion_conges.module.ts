import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Gestion_congesRoutingModule } from './gestion_conges-routing.module';
import {SharedModule} from "../../common/shared/shared.module";
import { MdlListComponent } from './components/mdl-list/mdl-list.component';
import { MatiereListComponent } from './components/matiere-list/matiere-list.component';
import { MdlViewComponent } from './components/mdl-view/mdl-view.component';
import {MdlService} from "./services/mdl.service";
import {ServiceService} from "./services/service.service";
import { ServicesListeComponent } from './components/services-liste/services-liste.component';

@NgModule({
  declarations: [
    MdlListComponent,
    MatiereListComponent,
    MdlViewComponent,
    ServicesListeComponent
  ],
  imports: [
    CommonModule,
    Gestion_congesRoutingModule,
    SharedModule
  ],
  providers: [
    MdlService,
    ServiceService
  ]
})
export class Gestion_congesModule { }
