import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import {IdemandeConge} from "../models/idemande-conge";
@Injectable()
export class DemandeCongeService {
  constructor(private http: HttpClient) { }

  getConges() {
    return this.http.get<[]>("http://localhost:8990/conges")
  }


  

  addConges(conge: IdemandeConge) {
    console.log(conge);
    
    return this.http.post("http://localhost:8990/conges/create", conge);

  }
 
}
