import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  public isLoggedIn = false;

  constructor(
    private router: Router
  ) {}

  unAuthorize(): void {
    this.router.navigateByUrl('/unauthorized')
  }
}
