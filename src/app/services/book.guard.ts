import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class BookGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.checkLoggedIn();
  }

  constructor(private userService: UserService, private router: Router) {}

  checkLoggedIn(): boolean {
    if (sessionStorage.getItem('user') !== null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
