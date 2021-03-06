import { LoginRoute } from './../../services/routing/login-route.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { InvestmentPlannerComponent } from './investment-planner.component';

const routes: Routes = [
  {
    path: '',
    component: InvestmentPlannerComponent,
    canLoad: [LoginRoute],
  },
];

@NgModule({
  declarations: [InvestmentPlannerComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class InvestmentPlannerModule {}
