import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import {ItypeConges} from "../models/itype-conges";
@Injectable()
export class TypeCongesService {
  constructor(private http: HttpClient) { }

  getTypeconges() {
    return this.http.get<ItypeConges[]>("http://localhost:8990/typeconge")
  }


  updateTypeconges(typeconge: ItypeConges,idTypeConge: number) {
    console.log(typeconge);
    return this.http.put("http://localhost:8990/typeconge/update/"+idTypeConge, typeconge);
  }

  addTypeconges(typeconge: ItypeConges) {
    console.log(typeconge);
    
    return this.http.post("http://localhost:8990/typeconge/create", typeconge);

  }
  deleteTypeconges(idTypeConge: number) {
    console.log(idTypeConge)
    return this.http.delete("http://localhost:8990/typeconge/delete/"+idTypeConge);
  }
}
