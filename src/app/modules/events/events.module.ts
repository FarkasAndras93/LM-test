import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChartModule } from 'primeng/chart';
import { EventsComponent } from './events.component';

const routes: Routes = [
  {
    path: '',
    component: EventsComponent,
  },
];

@NgModule({
  declarations: [EventsComponent],
  imports: [RouterModule.forChild(routes), CommonModule, ChartModule],
})
export class EventsModule {}
