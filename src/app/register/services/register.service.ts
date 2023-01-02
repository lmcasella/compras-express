import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private afauth: AngularFireAuth) {}

  // Registrar usuario
  async register(email: string, password: string) {
    try {
      const result = await this.afauth.createUserWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log('Register error', error);
      return null;
    }
  }
}
