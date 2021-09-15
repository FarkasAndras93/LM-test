import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then((m) => m.LoginModule),
    // TODO - add canLoad
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    // TODO - add canLoad
  },
  {
    path: 'avs-analysis',
    loadChildren: () =>
      import('./modules/avs-analysis/avs-analysis.module').then(
        (m) => m.AvsAnalysisModule
      ),
    // TODO - add canLoad
  },
  {
    path: 'auto-liquidity-management',
    loadChildren: () =>
      import(
        './modules/auto-liquidity-management/auto-liquidity-management.module'
      ).then((m) => m.AutoLiquidityManagementModule),
    // TODO - add canLoad
  },
  {
    path: 'liquidity-certificate',
    loadChildren: () =>
      import(
        './modules/liquidity-certificate/liquidity-certificate.module'
      ).then((m) => m.LiquidityCertificateModule),
    // TODO - add canLoad
  },
  {
    path: 'bank-data',
    loadChildren: () =>
      import('./modules/bank-data/bank-data.module').then(
        (m) => m.BankDataModule
      ),
    // TODO - add canLoad
  },
  {
    path: 'events',
    loadChildren: () =>
      import('./modules/events/events.module').then((m) => m.EventsModule),
    // TODO - add canLoad
  },
  {
    path: 'investment-planner',
    loadChildren: () =>
      import('./modules/investment-planner/investment-planner.module').then(
        (m) => m.InvestmentPlannerModule
      ),
    // TODO - add canLoad
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
