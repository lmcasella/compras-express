import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, mergeMap, of } from 'rxjs';
import { LoginService } from '../../login/services/login.service';
import * as AuthActions from '../actions/auth.actions';
import { Login } from '../../models/auth.interface';

@Injectable()
export class AuthEffects {
  // constructor(private actions$: Actions, private loginService: LoginService) {}
  // // Login with promise
  // loginStart$ = createEffect(() =>
  //   this.actions$.pipe(
  //     ofType(AuthActions.loginRequest),
  //     mergeMap((action) =>
  //       this.loginService
  //         .login(action.email, action.password)
  //         .then((LoginSuccessResponse: Login) =>
  //           AuthActions.loginSuccess({ LoginSuccessResponse })
  //         )
  //         .catch((error) => AuthActions.loginFailure({ error }))
  //     )
  //   )
  // );
}
