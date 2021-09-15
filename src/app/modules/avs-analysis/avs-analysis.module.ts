import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { AvsAnalysisComponent } from './avs-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: AvsAnalysisComponent,
  },
];

@NgModule({
  declarations: [AvsAnalysisComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class AvsAnalysisModule {}
