import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private afauth: AngularFireAuth) {}

  async login(email: string, password: string) {
    try {
      const result = await this.afauth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log('Login error', error);
      return null;
    }
  }
}
