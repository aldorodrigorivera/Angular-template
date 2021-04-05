import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CalendarOptions, DateSelectArg } from '@fullcalendar/core';
import { ReservationDialogComponent } from 'src/app/components/dialogs/reservation-dialog/reservation-dialog.component';
import { config } from '../../../shared/calendarConfig'


@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent implements OnInit {
  public barbers = [];
  public wantToAdd = false;
  public calendarOptions: CalendarOptions = null;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.calendarOptions = config;
    this.calendarOptions.select = this.handleDateSelect.bind(this);
    this.barbers=[{
      name:"Diego Soja",
      img:"https://images.pexels.com/photos/668196/pexels-photo-668196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    },{
      name:"Rodrigo Rivera",
      img:"https://images.pexels.com/photos/2881253/pexels-photo-2881253.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }];
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    this.dialog.open(ReservationDialogComponent, {data: selectInfo});
  }


}
