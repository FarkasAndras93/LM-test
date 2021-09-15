import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { LoginStoreService } from './store/login-store.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit, OnDestroy {
  userForm: FormGroup;

  private loginStatus: boolean;
  private subscriptionList$: Subscription[] = [];

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private loginStoreService: LoginStoreService,
    private messageService: MessageService
  ) {
    this.createForm();
  }

  ngOnInit(): void {
    this.subscriptionList$.push(
      this.loginStoreService.loginStatus$.subscribe((status) => {
        this.loginStatus = status;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscriptionList$.forEach((s) => s.unsubscribe());
  }

  goToLogin(): void {
    if (this.userForm.valid) {
      this.loginStoreService.loginUser(
        this.userForm.get('userName').value,
        this.userForm.get('password').value
      );
      this.router.navigate(['/home']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid credentials!',
      });
    }
  }

  private createForm(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
}
