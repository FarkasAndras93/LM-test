import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { LiquidityCertificateComponent } from './liquidity-certificate.component';

const routes: Routes = [
  {
    path: '',
    component: LiquidityCertificateComponent,
  },
];

@NgModule({
  declarations: [LiquidityCertificateComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class LiquidityCertificateModule {}
