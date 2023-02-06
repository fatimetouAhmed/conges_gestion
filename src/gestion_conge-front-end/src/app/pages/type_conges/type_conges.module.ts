import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {SharedModule} from "../../common/shared/shared.module";
import { TypeCongesComponent } from './components/type-conges/type-conges.component';
import { TypeCongesService } from './services/type-conges.service';
import { Type_congesRoutingModule } from './type_conges-routing.module';

@NgModule({
  declarations: [
  
    TypeCongesComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    Type_congesRoutingModule
  ],
  providers: [
    TypeCongesService
  ]
})
export class Type_congesModule { }
