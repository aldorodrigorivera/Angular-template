import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  public barbers = [];
  public wantToAdd = false;
  constructor() { }

  ngOnInit() {
    this.barbers=[{
      name:"Diego Soja",
      img:"https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
      name:"Rodrigo Rivera",
      img:"https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }];
  }

}
