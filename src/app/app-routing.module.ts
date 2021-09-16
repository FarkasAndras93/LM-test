import { LoginRoute } from './services/routing/login-route.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    canLoad: [LoginRoute],
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canLoad: [LoginRoute],
  },
  {
    path: 'avs-analysis',
    loadChildren: () =>
      import('./modules/avs-analysis/avs-analysis.module').then(
        (m) => m.AvsAnalysisModule
      ),
    canLoad: [LoginRoute],
  },
  {
    path: 'auto-liquidity-management',
    loadChildren: () =>
      import(
        './modules/auto-liquidity-management/auto-liquidity-management.module'
      ).then((m) => m.AutoLiquidityManagementModule),
    canLoad: [LoginRoute],
  },
  {
    path: 'liquidity-certificate',
    loadChildren: () =>
      import(
        './modules/liquidity-certificate/liquidity-certificate.module'
      ).then((m) => m.LiquidityCertificateModule),
    canLoad: [LoginRoute],
  },
  {
    path: 'bank-data',
    loadChildren: () =>
      import('./modules/bank-data/bank-data.module').then(
        (m) => m.BankDataModule
      ),
    canLoad: [LoginRoute],
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./modules/events/events.module').then((m) => m.EventsModule),
    canLoad: [LoginRoute],
  },
  {
    path: 'investment-planner',
    loadChildren: () =>
      import('./modules/investment-planner/investment-planner.module').then(
        (m) => m.InvestmentPlannerModule
      ),
    canLoad: [LoginRoute],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
