import { LoginRoute } from './../../services/routing/login-route.service';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AutoLiquidityManagementComponent } from './auto-liquidity-management.component';

const routes: Routes = [
  {
    path: '',
    component: AutoLiquidityManagementComponent,
    canLoad: [LoginRoute],
  },
];

@NgModule({
  declarations: [AutoLiquidityManagementComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class AutoLiquidityManagementModule {}
