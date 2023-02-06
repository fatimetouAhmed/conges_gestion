import { Component, Input, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {Iservice} from "../../models/iservice";

import {UtilService} from "../../../../services/util.service";
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  @Input("idService") idService: any;
  services: Iservice[] = [];
  service = <Iservice>{}

  constructor(private servicesService:ServiceService, public util: UtilService) {
  }

  fillForm(ser: Iservice) {
    this.service = ser;
  }
  ngOnInit(): void {
    this.servicesService.getServices().subscribe(data => {
      this.services = data;
    })

  }


 

  delete(idService:number) {
    console.log(idService)
    this.servicesService.deleteServices(idService).subscribe(() => {
    this.service = <Iservice>{}
  })
  }

  save() {
    if (this.service.id) {
      this.servicesService.updateServices(this.service,this.service.id).subscribe(() => {
        this.service = <Iservice>{}
      })
    } else {
      this.service.id = this.idService;
      this.servicesService.addServices(this.service).subscribe(() => {
        this.service = <Iservice>{}
      })
    }
  }
}
