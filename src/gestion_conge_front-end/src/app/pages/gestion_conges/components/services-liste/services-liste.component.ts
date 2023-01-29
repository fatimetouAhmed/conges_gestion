import { Component, Input, OnInit } from '@angular/core';
import {ServiceService} from "../../services/service.service";
import {Iservices} from "../../models/iservices";
import {MatCardModule} from '@angular/material/card';
@Component({
  selector: 'app-services-liste',
  templateUrl: './services-liste.component.html',
  styleUrls: ['./services-liste.component.css']
})

export class ServicesListeComponent implements OnInit{

  @Input("idService") idService: any;
  services: Iservices[] = [];
  service = <Iservices>{}

  constructor(private servicesService:ServiceService) {
  }

  fillForm(ser: Iservices) {
    this.service = ser;
  }
  ngOnInit(): void {
    this.servicesService.getServices().subscribe(data => {
      this.services = data;
    })

  }


 

  delete(idService:number) {
    
    this.servicesService.deleteServices(this.service.id).subscribe(() => {
    this.service = <Iservices>{}
  })
  }

  save() {
    if (this.service.id) {
      this.servicesService.updateServices(this.service,this.service.id).subscribe(() => {
        this.service = <Iservices>{}
      })
    } else {
      this.service.id = this.idService;
      this.servicesService.addServices(this.service).subscribe(() => {
        this.service = <Iservices>{}
      })
    }
  }
}
