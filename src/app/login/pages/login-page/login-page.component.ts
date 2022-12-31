import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginRequest } from '../../../state/actions/auth.actions';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],
})
export class LoginPageComponent implements OnInit {
  constructor(private store: Store<any>) {}

  ngOnInit() {
    this.store.dispatch(loginRequest());
  }
}
