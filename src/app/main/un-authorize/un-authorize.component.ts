import { Component, OnInit } from '@angular/core';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-un-authorize',
  templateUrl: './un-authorize.component.html',
  styleUrls: ['./un-authorize.component.scss']
})
export class UnAuthorizeComponent {

  constructor(public u: UtilsService) { }

}
