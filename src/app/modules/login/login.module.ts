import { NgxsModule } from '@ngxs/store';
import { LoginState } from './store/login.state';
import { ToastModule } from 'primeng/toast';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ToastModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    NgxsModule.forRoot([LoginState]),
  ],
})
export class LoginModule {}
