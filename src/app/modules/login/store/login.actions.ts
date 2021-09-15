import { HttpErrorResponse } from '@angular/common/http';
import { LoginParamsModel } from '../../../models/login/login-params.model';

export class Login {
  static readonly type = '[Login] Login';
  constructor(public params: LoginParamsModel) {}
}

export class LoginCompleted {
  static readonly type = '[Login] LoginCompleted';
  constructor(public status: boolean, public userName: string) {}
}

export class LoginFailed {
  static readonly type = '[Login] LoginFailed';
  constructor(public error: HttpErrorResponse) {}
}

export class Logout {
  static readonly type = '[Logout] Logout';
  constructor() {}
}

export class LogoutCompleted {
  static readonly type = '[Logout] LogoutCompleted';
  constructor() {}
}

export class LogoutFailed {
  static readonly type = '[Logout] LogoutFailed';
  constructor(public error: HttpErrorResponse) {}
}
