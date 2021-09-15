import { Injectable } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { LoginParamsModel } from '../../../models/login/login-params.model';
import { UserTypeEnum } from '../../../models/login/user-type.enum';
import { Login, Logout } from './login.actions';
import { LoginState } from './login.state';

@Injectable()
export class LoginStoreService {
  constructor(private store: Store) {}

  @Select(LoginState.userName) public userName$: Observable<string>;
  @Select(LoginState.loginStatus) public loginStatus$: Observable<boolean>;
  @Select(LoginState.userEmail) public userEmail$: Observable<string>;
  @Select(LoginState.userType) public userType$: Observable<UserTypeEnum>;

  loginUser(username: string, pass: string): void {
    const params: LoginParamsModel = { username, pass };
    this.store.dispatch(new Login(params));
  }

  logoutUser(): void {
    this.store.dispatch(new Logout());
  }
}
