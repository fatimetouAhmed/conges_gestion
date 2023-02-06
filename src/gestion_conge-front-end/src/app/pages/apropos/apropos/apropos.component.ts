import { Component, OnInit } from '@angular/core';
import {UtilService} from "../../../services/util.service";
@Component({
  selector: 'app-apropos',
  templateUrl: './apropos.component.html',
  styleUrls: ['./apropos.component.css']
})
export class AproposComponent implements OnInit {

  constructor(public util: UtilService) { }

  ngOnInit(): void {
  }

}
