import { Injectable } from '@angular/core';
import { CanLoad, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { LoginStoreService } from './../../modules/login/store/login-store.service';

/**
 * Routing Guard.
 *
 * @export
 * @class LoginRoute
 * @implements {CanLoad}
 */
@Injectable({
  providedIn: 'root',
})
export class LoginRoute implements CanLoad {
  constructor(
    private loginStoreService: LoginStoreService,
    private router: Router
  ) {}

  /**
   * Guard which will check if we are still logged in. If not a redirection to the LoginPage
   * is made.
   */
  canLoad(route: any): Observable<boolean> {
    return this.loginStoreService.loginStatus$.pipe(
      map((status) => {
        if (status || route.path === 'login') {
          return true;
        } else {
          this.router.navigate(['/login']);
          return false;
        }
      }, take(1))
    );
  }
}
