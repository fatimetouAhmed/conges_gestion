import { Component, Input, OnInit } from '@angular/core';
import {CongesService} from "../../services/conges.service";
import {Iconges} from "../../models/iconges";
import {UtilService} from "../../../../services/util.service";
import {IRef} from "../../../../models/iref";
import {ReferentielService} from "../../../../services/referentiel.service";
import { Iemploiyes } from 'src/app/pages/emploiyes/models/iemploiyes';
@Component({
  selector: 'app-conges',
  templateUrl: './conges.component.html',
  styleUrls: ['./conges.component.css']
})
export class CongesComponent implements OnInit {
  @Input("idConges") idconges: any;
  conges: Iconges[] = [];
  conge = <Iconges>{};
  emploiye = <Iemploiyes>{};
  emploiyes: IRef[] = [];
 typeconges: IRef[] = [];
  statusConge="Confirmer";
  statusConge2="Refuser";
  statusEmploiye="en conge";
  constructor(private congesService:CongesService,public util: UtilService,private referentielService: ReferentielService) {
  }

  fillForm(ser: Iconges) {
    this.conge = ser;
  }
  ngOnInit(): void {
    this.congesService.getConges().subscribe(data => {
      this.conges = data;
    })
    this.referentielService.getEmploiyes().subscribe(data => {
      this.emploiyes = data;
    })
    this.referentielService.getTypeconges().subscribe(data => {
      this.typeconges= data;
    })
  }


 

  delete(idConges:number) {
    
    this.congesService.deleteConges(idConges).subscribe(() => {
    this.conge = <Iconges>{}
  })
  }

  save() {
    if (this.conge.id) {
      this.congesService.updateConges(this.conge,this.conge.id).subscribe(() => {
        this.conge = <Iconges>{}
      })
    } else {
      this.conge.id = this.idconges;
      this.congesService.addConges(this.conge).subscribe(() => {
        this.conge = <Iconges>{}
      })
    }
  }
  updateStatus(idConges:number,idEmploiye:number ) {

      this.congesService.updateStatus(idConges, this.statusConge).subscribe(() => {
        this.conge = <Iconges>{}
      })
      this.congesService.updateEmploiyeStatus(idEmploiye,this.statusEmploiye).subscribe(() => {
        this.conge = <Iconges>{}
      })
    } 
    updateStat(idConges:number) {

      this.congesService.updateStatus(idConges, this.statusConge2).subscribe(() => {
        this.conge = <Iconges>{}
      })
    } 
}
