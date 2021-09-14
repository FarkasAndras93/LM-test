import { User } from './../../models/User';
import { AddUser } from './../../actions/user.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [MessageService],
})
export class LoginComponent implements OnInit {
  userForm: FormGroup;

  users: Observable<User>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store,
    private messageService: MessageService
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  public login(): void {
    if (this.userForm.valid) {
      this.router.navigate(['/home']);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Invalid credentials!',
      });
    }
  }

  createForm(): void {
    this.userForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addUser(username, password): void {
    this.store.dispatch(new AddUser({ username, password }));
    this.users = this.store.select((state) => state.users.users);
  }
}
