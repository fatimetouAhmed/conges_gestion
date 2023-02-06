import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IRef} from "../models/iref";

@Injectable({
  providedIn: 'root'
})
export class ReferentielService {

  constructor(private http: HttpClient) { }

  getServices() {
      return this.http.get<IRef[]>("http://localhost:8990/referentiel/services")
  }
  getEmploiyes() {
    return this.http.get<IRef[]>("http://localhost:8990/referentiel/emploiyes")
}
getTypeconges() {
  return this.http.get<IRef[]>("http://localhost:8990/referentiel/typesconges")
}

}
