import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { selectAuthFeature } from '../../../state/selectors/auth.selector';
import {
  selectAuthEmail,
  selectAuthPassword,
} from '../../../state/selectors/auth.selector';

import * as AuthActions from '../../../state/actions/auth.actions';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private loginService: LoginService,
    private router: Router
  ) {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  login$: Observable<any> = new Observable();

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      className: 'c-form-input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        name: 'required',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      className: 'c-form-input',
      templateOptions: {
        type: 'password',
        label: 'Contraseña',
        name: 'required',
        required: true,
      },
    },
  ];

  ngOnInit() {
    // this.login$ = this.store.select(selectAuthFeature);
  }

  async logIn() {
    if (this.form.invalid) {
      return;
    } else {
      const result = await this.loginService.login(
        this.model.email,
        this.model.password
      );
      if (result) {
        console.log('Login success');

        this.form.reset();
        this.router.navigate(['/']);
      } else {
        console.log('Login failed');
      }
      console.log(result);
    }
  }

  // Prueba de login con ngrx
  // async signIn(): Promise<any> {
  //   this.store.dispatch(
  //     AuthActions.loginRequest({
  //       email: this.model.email,
  //       password: this.model.password,
  //     })
  //   );
  // }
}
