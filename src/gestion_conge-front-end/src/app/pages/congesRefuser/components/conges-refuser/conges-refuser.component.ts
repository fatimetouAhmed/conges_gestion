import { Component, OnInit } from '@angular/core';
import { IcongesRefuser } from '../../models/iconges-refuser';
import { CongesRefuserService } from '../../services/conges-refuser.service';
import {UtilService} from "../../../../services/util.service";
@Component({
  selector: 'app-conges-refuser',
  templateUrl: './conges-refuser.component.html',
  styleUrls: ['./conges-refuser.component.css']
})
export class CongesRefuserComponent implements OnInit {
  conges: IcongesRefuser[] = [];
  constructor(private CongesRefuserService:CongesRefuserService,public util: UtilService) { }

  ngOnInit(): void {
    this.CongesRefuserService.getConges().subscribe(data => {
      this.conges = data;
    })
  }

}
