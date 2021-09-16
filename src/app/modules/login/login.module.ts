import { LoginRoute } from './../../services/routing/login-route.service';
import { RouterModule, Routes } from '@angular/router';
import { NgxsModule } from '@ngxs/store';
import { LoginState } from './store/login.state';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    canLoad: [LoginRoute],
  },
];
@NgModule({
  declarations: [LoginComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ToastModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    NgxsModule.forRoot([LoginState]),
  ],
})
export class LoginModule {}
