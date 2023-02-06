import { Component, Input, OnInit } from '@angular/core';
import { ItypeConges } from '../../models/itype-conges';
import { TypeCongesService } from '../../services/type-conges.service';
import {UtilService} from "../../../../services/util.service";
@Component({
  selector: 'app-type-conges',
  templateUrl: './type-conges.component.html',
  styleUrls: ['./type-conges.component.css']
})
export class TypeCongesComponent implements OnInit {


  @Input("idtype") idtype: any;
  typeconges: ItypeConges[] = [];
  typeconge = <ItypeConges>{}

  constructor(private typecongeservice:TypeCongesService, public util: UtilService) {
  }

  fillForm(type: ItypeConges) {
    this.typeconge = type;
  }
  ngOnInit(): void {
    this.typecongeservice.getTypeconges().subscribe(data => {
      this.typeconges = data;
    })

  }


 

  delete(idtype:number) {
    console.log(idtype)
    this.typecongeservice.deleteTypeconges(idtype).subscribe(() => {
    this.typeconge = <ItypeConges>{}
  })
  }

  save() {
    if (this.typeconge.id) {
      this.typecongeservice.updateTypeconges(this.typeconge,this.typeconge.id).subscribe(() => {
        this.typeconge = <ItypeConges>{}
      })
    } else {
      this.typeconge.id = this.idtype;
      this.typecongeservice.addTypeconges(this.typeconge).subscribe(() => {
        this.typeconge = <ItypeConges>{}
      })
    }
  }
}
