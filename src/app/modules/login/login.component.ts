import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { User } from '../../models/User';
import { LoginStoreService } from './store/login-store.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit, OnDestroy {
    angForm: FormGroup;

    users: Observable<User>;
    private loginStatus: boolean;
    private subscriptionList$: Subscription[];

    constructor(
        private router: Router,
        private fb: FormBuilder,
        private loginStoreService: LoginStoreService
    ) {
        this.createForm();
    }

    ngOnInit(): void {
        this.subscriptionList$.push(
            this.loginStoreService.loginStatus$.subscribe((status) => this.loginStatus = status)
        );
    }

    ngOnDestroy(): void {
        this.subscriptionList$.forEach(s => s.unsubscribe());
    }

    goToLogin(): void {
        this.router.navigate(['/home']);
    }

    addUser(username, password): void {
        this.loginStoreService.loginUser(username, password);
    }

    private createForm(): void {
        this.angForm = this.fb.group({
            username: ['', Validators.required],
            password: ['', Validators.required],
        });
    }
}
