import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {SharedModule} from "../../common/shared/shared.module";
import { CongesConfirmerComponent } from './components/conges-confirmer/conges-confirmer.component';
import { CongesConfirmerRoutingModule } from './congesConfirmer-routing.module';
import { CongesConfirmerService } from './services/conges-confirmer.service';


@NgModule({
  declarations: [
    CongesConfirmerComponent
  ],
  imports: [
    CommonModule,
    CongesConfirmerRoutingModule,
    SharedModule
  ],
  providers: [
    CongesConfirmerService
  ]
  
})
export class CongesConfirmerModule { }
