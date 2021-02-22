import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';
import * as moment from 'moment';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  public showFiller = false;
  public today = moment().format('DD . MM . YYYY');
  constructor(public u: UtilsService) { }

  ngOnInit() {
  }

}
