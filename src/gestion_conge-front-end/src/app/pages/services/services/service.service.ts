import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import {Iservice} from "../models/iservice";
@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<Iservice[]>("http://localhost:8990/services")
  }


  updateServices(service: Iservice,idService: number) {
    console.log(service);
    return this.http.put("http://localhost:8990/services/update/"+idService, service);
  }

  addServices(service: Iservice) {
    console.log(service);
    
    return this.http.post("http://localhost:8990/services/create", service);

  }
  deleteServices(idService: number) {
    console.log(idService)
    return this.http.delete("http://localhost:8990/services/delete/"+idService);
  }
}
