import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import { EmploiyesComponent } from './components/emploiyes/emploiyes.component';
import { EmploiyesService } from './services/emploiyes.service';
import { EmploiyesRoutingModule } from './emploiyes-routing.module';


@NgModule({
  declarations: [
  
    EmploiyesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    EmploiyesRoutingModule
  ],
  providers: [
    EmploiyesService
  ]
})
export class EmploiyesModule { }
