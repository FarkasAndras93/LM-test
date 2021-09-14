import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public menuItems: MenuItem[];

  public basicData: any;

  public basicOptions: any;

  constructor() {}

  isExpanding = false;
  toggleSideBar(): void {
    this.isExpanding = !this.isExpanding;
  }

  ngOnInit(): void {
    this.initMenu();
    this.initChart();
  }

  private initMenu(): void {
    this.menuItems = [
      { label: 'Dashboard', icon: 'pi pi-plus' },
      { label: 'AVS Analyse', icon: 'pi pi-download' },
      {
        label: 'Liquiditatsplanung',
        items: [
          {
            label: 'Prognose',
            icon: 'pi pi-fw pi-plus',
          },
          { label: 'Ereignisse', icon: 'pi pi-fw pi-external-link' },
          { label: 'Autom. Liquiditat', icon: 'pi pi-fw pi-times' },
          { label: 'Investitionsplaner', icon: 'pi pi-fw pi-times' },
          { label: 'Bankdaten', icon: 'pi pi-fw pi-times' },
        ],
      },
      { label: 'Liquiditatszertifikat', icon: 'pi pi-download' },
    ];
  }

  private initChart(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'My First dataset',
          backgroundColor: '#42A5F5',
          data: [65, 59, 80, 81, 56, 55, 40],
        },
        {
          label: 'My Second dataset',
          backgroundColor: '#FFA726',
          data: [28, 48, 40, 19, 86, 27, 90],
        },
      ],
    };
    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: '#495057',
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
        y: {
          ticks: {
            color: '#495057',
          },
          grid: {
            color: '#ebedef',
          },
        },
      },
    };
  }
}
