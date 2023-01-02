import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  constructor(private afauth: AngularFireAuth) {}

  getUser() {
    return this.afauth.authState;
  }

  getUserEmail() {
    return this.afauth.authState.subscribe((user) => user?.email);
  }

  logout() {
    this.afauth.signOut();
  }
}
