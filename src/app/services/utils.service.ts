import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor(
    private router: Router,
    private _location: Location
    ) {}

  goTo(url: string) {
    this.router.navigateByUrl(url);
  }
  goBack() {
    this._location.back();
  }
}
