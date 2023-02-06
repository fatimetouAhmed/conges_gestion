import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import {Iconges} from "../models/iconges";
@Injectable()
export class CongesService {
  constructor(private http: HttpClient) { }

  getConges() {
    return this.http.get<[]>("http://localhost:8990/conges")
  }


  updateConges(conge: Iconges,idConge : number) {

    return this.http.put("http://localhost:8990/conges/update/"+idConge, conge);
  }

  addConges(conge: Iconges) {
    console.log(conge);
    
    return this.http.post("http://localhost:8990/conges/create", conge);

  }
  deleteConges(idConge: number) {
    return this.http.delete("http://localhost:8990/conges/delete/"+idConge);
  }
  updateStatus(id : number ,status:string) {

    return this.http.put("http://localhost:8990/conges/updateStatus/"+id, status);
  }
    updateEmploiyeStatus(id : number ,status:string) {

    return this.http.put("http://localhost:8990/conges/updateEmploiyeStatus/"+id, status);
  }
}
