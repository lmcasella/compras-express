import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private firestore: AngularFirestore) {
    this.getProducts();
  }

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }
}
