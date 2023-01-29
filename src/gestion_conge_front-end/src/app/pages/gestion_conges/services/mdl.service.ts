import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {IMdl} from "../models/imdl";
import {IMatiere} from "../models/imatiere";

@Injectable()
export class MdlService {

  constructor(private http: HttpClient) { }

  getModules() {
    return this.http.get<IMdl[]>("http://localhost:8990/gest-module")
  }

  getMatieres(idMdl: number) {
    let params  = new HttpParams();
    params.set("idMdl", idMdl.toString())
    return this.http.get<IMatiere[]>("http://localhost:8990/gest-matiere?idMdl=" + idMdl)
  }

  updateMat(curMatiere: IMatiere) {
    return this.http.put("http://localhost:8990/gest-matiere", curMatiere);
  }

  addMat(curMatiere: IMatiere) {
    return this.http.post("http://localhost:8990/gest-matiere", curMatiere);
  }
}
