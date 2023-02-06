import { Component, Input, OnInit } from '@angular/core';
import { IdemandeConge } from '../../models/idemande-conge';
import {UtilService} from "../../../../services/util.service";
import {IRef} from "../../../../models/iref";
import {ReferentielService} from "../../../../services/referentiel.service";
import { Iemploiyes } from 'src/app/pages/emploiyes/models/iemploiyes';
import { DemandeCongeService } from '../../services/demande-conge.service';
@Component({
  selector: 'app-demande-conge',
  templateUrl: './demande-conge.component.html',
  styleUrls: ['./demande-conge.component.css']
})
export class DemandeCongeComponent implements OnInit {
  @Input("idConges") idconges: any;
  conges: IdemandeConge[] = [];
  conge = <IdemandeConge>{};
  emploiye = <Iemploiyes>{};
  emploiyes: IRef[] = [];
 typeconges: IRef[] = [];
  statusConge="Confirmer";
  statusConge2="Refuser";
  statusEmploiye="en conge";
  constructor(private demande:DemandeCongeService,public util: UtilService,private referentielService: ReferentielService) {
  }

  fillForm(ser: IdemandeConge) {
    this.conge = ser;
  }
  ngOnInit(): void {
    this.referentielService.getEmploiyes().subscribe(data => {
      this.emploiyes = data;
    })
    this.referentielService.getTypeconges().subscribe(data => {
      this.typeconges= data;
    })
  }



  save() {
 
      this.conge.id = this.idconges;
      this.demande.addConges(this.conge).subscribe(() => {
        this.conge = <IdemandeConge>{}
      })
  
  }

}
