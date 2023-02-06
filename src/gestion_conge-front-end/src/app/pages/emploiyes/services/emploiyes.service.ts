import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

import {Iemploiyes} from "../models/iemploiyes";
@Injectable()
export class EmploiyesService {

  constructor(private http: HttpClient) { }

  getemploiyee() {
    return this.http.get<Iemploiyes[]>("http://localhost:8990/emploiyee")
  }


  updateemploiyee(emploiyee: Iemploiyes,idemploiyee: number) {

    return this.http.put("http://localhost:8990/emploiyee/update/"+idemploiyee, emploiyee);
  }

  addEmploiyee(emploiyee:Iemploiyes) {
    console.log(emploiyee);
    
    return this.http.post("http://localhost:8990/emploiyee/create", emploiyee);

  }
  deleteEmploiyee(idemploiyee: number) {

    return this.http.delete("http://localhost:8990/emploiyee/delete/"+idemploiyee);
  }
}
