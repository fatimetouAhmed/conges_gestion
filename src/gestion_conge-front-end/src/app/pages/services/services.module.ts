import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import { ServiceComponent } from './components/service/service.component';
import { ServiceService } from './services/service.service';
import { ServicesRoutingModule } from './services-routing.module';


@NgModule({
  declarations: [
    ServiceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ServicesRoutingModule
  ],
  providers: [
   ServiceService
  ]
})
export class ServicesModule { }
