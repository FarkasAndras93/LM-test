import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ChartModule } from 'primeng/chart';
import { BankDataComponent } from './bank-data.component';

const routes: Routes = [
  {
    path: '',
    component: BankDataComponent,
  },
];

@NgModule({
  declarations: [BankDataComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class BankDataModule {}
