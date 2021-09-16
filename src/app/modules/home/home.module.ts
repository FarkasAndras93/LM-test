import { LoginRoute } from './../../services/routing/login-route.service';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { ChartModule } from 'primeng/chart';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canLoad: [LoginRoute],
  },
];
@NgModule({
  declarations: [HomeComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class HomeModule {}
