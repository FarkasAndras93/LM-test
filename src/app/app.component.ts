import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { RouterDataResolved } from '@ngxs/router-plugin';
import { Actions, ofActionSuccessful } from '@ngxs/store';
import { MenuItem } from 'primeng/api';
import { Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { LoginStoreService } from './modules/login/store/login-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnDestroy {
  public menuItems: MenuItem[];

  public menuOpened = true;

  private subscriptionList$: Subscription[] = [];

  private destroy$ = new Subject<void>();

  constructor(
    actions$: Actions,
    private loginStoreService: LoginStoreService,
    private router: Router
  ) {
    // TODO - remove it
    actions$
      .pipe(ofActionSuccessful(RouterDataResolved), takeUntil(this.destroy$))
      .subscribe((action: RouterDataResolved) => {
        console.log(action.routerState);
      });

    this.subscriptionList$.push(
      this.loginStoreService.loginStatus$.subscribe((status) => {
        if (!status) {
          this.initLoggedOutMenu();
        } else {
          this.initLoggedInMenu();
        }
      })
    );

    this.initLoggedOutMenu();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.subscriptionList$.forEach((s) => s.unsubscribe());
  }

  public toggleMenu(): void {
    this.menuOpened = !this.menuOpened;
  }

  /**
   * Method to initialize menu items when the user is logged in.
   *
   * @private
   * @memberof AppComponent
   */
  private initLoggedInMenu(): void {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-plus' },
      {
        label: 'AVS Analyse',
        icon: 'pi pi-download',
        routerLink: '/avs-analysis',
      },
      {
        label: 'Liquiditätsplanung',
        items: [
          {
            label: 'Prognose',
            icon: 'pi pi-fw pi-plus',
          },
          {
            label: 'Ereignisse',
            icon: 'pi pi-fw pi-external-link',
            routerLink: '/events',
          },
          {
            label: 'Autom. Liquidität',
            icon: 'pi pi-fw pi-times',
            routerLink: '/auto-liquidity-management',
          },
          {
            label: 'Investitionsplaner',
            icon: 'pi pi-fw pi-times',
            routerLink: '/investment-planner',
          },
          {
            label: 'Bankdaten',
            icon: 'pi pi-fw pi-times',
            routerLink: '/bank-data',
          },
        ],
      },
      {
        label: 'Liquiditätszertifikat',
        icon: 'pi pi-download',
        routerLink: '/liquidity-certificate',
      },
      {
        label: 'Logout',
        icon: 'pi pi-arrow-circle-left',
        command: () => {
          this.logout();
        },
      },
    ];
  }

  /**
   * Method to initialize menu items when the user is logged out.
   *
   * @private
   * @memberof AppComponent
   */
  private initLoggedOutMenu(): void {
    this.menuItems = [
      {
        label: 'Login',
        icon: 'pi pi-arrow-circle-right',
        routerLink: '/login',
      },
    ];
  }

  /**
   * Method to log out from the application.
   *
   * @private
   * @memberof AppComponent
   */
  private logout(): void {
    this.initLoggedOutMenu();
    this.loginStoreService.logoutUser();
    this.router.navigate(['/login']);
  }
}
