import { Component, Input, OnInit } from '@angular/core';
import {CongesConfirmerService} from "../../services/conges-confirmer.service";
import {IcongesConfirmer} from "../../models/iconges-confirmer";
import {UtilService} from "../../../../services/util.service";
@Component({
  selector: 'app-conges-confirmer',
  templateUrl: './conges-confirmer.component.html',
  styleUrls: ['./conges-confirmer.component.css']
})
export class CongesConfirmerComponent implements OnInit {
  conges: IcongesConfirmer[] = [];
  constructor(private CongesConfirmerService:CongesConfirmerService,public util: UtilService) {
  }

  ngOnInit(): void {
    this.CongesConfirmerService.getConges().subscribe(data => {
      this.conges = data;
    })
  }


}
