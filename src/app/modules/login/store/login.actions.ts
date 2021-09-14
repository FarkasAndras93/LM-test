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

