import { User } from './../../models/User';
import { AddUser } from './../../actions/user.action';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  angForm: FormGroup;

  users: Observable<User>;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private store: Store
  ) {
    this.createForm();
  }

  ngOnInit(): void {}

  public login(): void {
    this.router.navigate(['/home']);
  }

  createForm() {
    this.angForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addUser(username, password) {
    this.store.dispatch(new AddUser({ username, password }));
    this.users = this.store.select((state) => state.users.users);
  }
}
