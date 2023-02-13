import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LoginComponent } from './login/login.component';
import {SharedModule} from "../../common/shared/shared.module";
import {AuthentificationService} from "./authentification.service";


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    SharedModule
  ],
  providers: [AuthentificationService]
})
export class LayoutsModule { }
