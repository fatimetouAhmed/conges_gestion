import { Component, Input, OnInit } from '@angular/core';
import {EmploiyesService} from "../../services/emploiyes.service";
import {Iemploiyes} from "../../models/iemploiyes";
import {UtilService} from "../../../../services/util.service";
import {IRef} from "../../../../models/iref";
import {ReferentielService} from "../../../../services/referentiel.service";
@Component({
  selector: 'app-emploiyes',
  templateUrl: './emploiyes.component.html',
  styleUrls: ['./emploiyes.component.css']
})
export class EmploiyesComponent implements OnInit {
  @Input("idempoiye") idempoiye: any;
  emploiyees: Iemploiyes[] = [];
  emploiyee = <Iemploiyes>{};
  services: IRef[] = [];

  constructor(private emploiyeeService: EmploiyesService,public util: UtilService,private referentielService: ReferentielService) {
  }

  fillForm(emp: Iemploiyes) {
    this.emploiyee = emp;
  }
  ngOnInit(): void {
    this.emploiyeeService.getemploiyee().subscribe(data => {
      this.emploiyees = data;
    })
    this.referentielService.getServices().subscribe(data => {
      this.services = data;
    })

  }


 

  delete(idemploiyee:number) {
    
    this.emploiyeeService.deleteEmploiyee(idemploiyee).subscribe(() => {
    this.emploiyee = <Iemploiyes>{}
  })
  }

  save() {
    if (this.emploiyee.id) {
      this.emploiyeeService.updateemploiyee(this.emploiyee,this.emploiyee.id).subscribe(() => {
        this.emploiyee = <Iemploiyes>{}
      })
    } else {
      this.emploiyee.id = this.idempoiye;
      this.emploiyeeService.addEmploiyee(this.emploiyee).subscribe(() => {
        this.emploiyee = <Iemploiyes>{}
      })
    }

  }
}
