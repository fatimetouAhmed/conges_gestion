import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import { CongesComponent } from './components/conges/conges.component';
import { CongesRoutingModule } from './conges-routing.module';
import { CongesService } from './services/conges.service';



@NgModule({
  declarations: [
  
    CongesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CongesRoutingModule
  ],
  providers: [
    CongesService
  ]
})
export class CongesModule { }
