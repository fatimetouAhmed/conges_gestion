import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Iservices} from "../models/iservices";
@Injectable()
export class ServiceService {

  constructor(private http: HttpClient) { }

  getServices() {
    return this.http.get<Iservices[]>("http://localhost:8990/services")
  }


  updateServices(service: Iservices,idService: number) {
    let params  = new HttpParams();
    params.set("idService", idService.toString())
    return this.http.put("http://localhost:8990/services/update?idService", service);
  }

  addServices(service: Iservices) {
    console.log(service);
    
    return this.http.post("http://localhost:8990/services/create", service);

  }
  deleteServices(idService: number) {
    let params  = new HttpParams();
    params.set("idService", idService.toString())
    return this.http.delete("http://localhost:8990/services/delete?idService");
  }
}
