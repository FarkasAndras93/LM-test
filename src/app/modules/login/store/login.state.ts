import { Injectable } from '@angular/core';
import { Action, NgxsOnInit, Selector, State, StateContext } from '@ngxs/store';
import { catchError, tap } from 'rxjs/operators';
import { UserTypeEnum } from '../../../models/login/user-type.enum';
import { Login, LoginCompleted, LoginFailed } from './login.actions';

export interface LoginStateModel {
  status: boolean;
  userName: string;
  userEmail: string;
  userType: UserTypeEnum.Admin;
}

const initialState: LoginStateModel = {
  status: null,
  userName: null,
  userEmail: null,
  userType: null,
};

@State<LoginStateModel>({
  name: 'login',
  defaults: initialState,
  children: [],
})
@Injectable()
export class LoginState {
  // as well need to be added  "implements NgxsOnInit"

  // this shuld be used only if you need them.
  // constructor() {
  // }
  //
  // ngxsOnInit(ctx?: StateContext<LoginStateModel>): void | any {
  // }

  @Selector()
  public static loginStatus(state: LoginStateModel): boolean {
    return state.status;
  }

  @Selector()
  public static userName(state: LoginStateModel): string {
    return state.userName;
  }

  @Selector()
  public static userEmail(state: LoginStateModel): string {
    return state.userEmail;
  }

  @Selector()
  public static userType(state: LoginStateModel): UserTypeEnum {
    return state.userType;
  }

  @Action(Login)
  public loginUser(ctx: StateContext<LoginStateModel>, action: Login): void {
    // todo here should be an controller from where you make request.
    // usually it is generated from swagger.
    // return this.controller.loginRequest(action.params).pipe(
    //   tap((status: boolean) =>
    //     ctx.dispatch(new LoginCompleted(status, action.params.username))
    //   ),
    //   catchError((error) => {
    //     return ctx.dispatch(new LoginFailed(error));
    //   })
    // );
  }

  @Action(LoginCompleted)
  public loginUserCompleted(
    ctx: StateContext<LoginStateModel>,
    action: LoginCompleted
  ): void {
    ctx.patchState({
      status: action.status,
    });
    if (action.status) {
      ctx.patchState({ userName: action.userName });
    }
  }
}
