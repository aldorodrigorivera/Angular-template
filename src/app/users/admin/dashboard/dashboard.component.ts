import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public barbers = [];
  public notifications = [];
  constructor() { }
  ngOnInit() {
    this.barbers = [{
      name:"Diego Soja",
      place:"Juriquilla",
      count:35,
      avatar:"https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
      name:"Rodrigo Rivera",
      place:"Juriquilla",
      count:18,
      avatar:"https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
      name:"Aldo Carrillo",
      place:"Los Arcos",
      count:6,
      avatar:"https://images.pexels.com/photos/897265/pexels-photo-897265.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }];

    this.notifications = [{
      active:true,
      barber:"Diego Soja",
      date:"02/03/21",
      hour:"12:00pm"
    },{ active:false,
      barber:"Diego Soja",
      date:"01/03/21",
      hour:"5:00pm"
    },{ active:false,
      barber:"Rodrigo Rivera",
      date:"02/03/21",
      hour:"02:00pm"
    }];
  }
  getMonth() {
    return moment().lang('es').format('MMMM');
  }

}
