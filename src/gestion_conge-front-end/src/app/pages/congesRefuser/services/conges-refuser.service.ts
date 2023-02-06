import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
@Injectable()
export class CongesRefuserService {
  constructor(private http: HttpClient) { }
  getConges() {
    return this.http.get<[]>("http://localhost:8990/conges/listeconge_refuser")
  }
}
