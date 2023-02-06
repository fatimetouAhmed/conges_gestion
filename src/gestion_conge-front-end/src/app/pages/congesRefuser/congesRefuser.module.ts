import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import { CongesRefuserComponent } from './components/conges-refuser/conges-refuser.component';
import { CongesRefuserRoutingModule } from './congesRefuser-routing.module';
import { CongesRefuserService } from './services/conges-refuser.service';


@NgModule({
  declarations: [
    CongesRefuserComponent
  ],
  imports: [
    CommonModule,
    CongesRefuserRoutingModule,
    SharedModule
  ],
  providers: [
    CongesRefuserService
  ]
})
export class CongesRefuserModule { }
