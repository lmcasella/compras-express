import { Injectable, OnDestroy } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import * as firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(
    private firestore: AngularFirestore,
    private toastr: ToastrService
  ) {}

  public pending_cart_id: string = '';

  getProducts() {
    return this.firestore.collection('products').snapshotChanges();
  }

  getCarts() {
    return this.firestore.collection('carts').snapshotChanges();
  }

  // Cancelar carrito de compras
  cancelCart() {
    this.firestore.collection('carts').doc(this.pending_cart_id).delete();
    this.pending_cart_id = '';
  }

  // Agregar producto al carrito de compras
  async addProductCart(product: any) {
    // Recorrer los carritos de compras para encontrar el carrito pendiente, si no existe, crearlo y agregar product, si existe agregar product
    await this.firestore
      .collection('carts')
      .ref.where('state', '==', 'pending')
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          this.pending_cart_id = doc.id;
          console.log(
            'Valor asignado a pending_cart_id: ',
            this.pending_cart_id
          );
        });
      })
      .then(() => {
        if (this.pending_cart_id == '') {
          this.firestore
            .collection('carts')
            .add({ state: 'pending', product_carts: [] })
            .then((docRef) => {
              this.pending_cart_id = docRef.id;
            });
        }
      })
      .then(() => {
        // Agregar producto al campo product_carts del carrito de compras
        this.firestore
          .collection('carts')
          .doc(this.pending_cart_id)
          .update({
            product_carts: firebase.default.firestore.FieldValue.arrayUnion({
              product_id: product.id,
              product_name: product.name,
              product_price: product.price,
              product_description: product.description,
              product_image: product.image,
              product_quantity: 1,
            }),
          });
        this.toastr.success('Producto agregado al carrito');
      });
  }

  async deleteProductCart(product: any) {
    // Eliminar producto del carrito de compras
    this.firestore.collection('product_carts').doc(product.id).delete();
  }

  async getProductCart() {
    // Obtener productos del carrito de compras pendiente
    await this.firestore.collection('carts').doc(this.pending_cart_id).get();
  }

  submitCart() {
    // Actualizar estado del carrito de compras
    this.firestore
      .collection('carts')
      .doc(this.pending_cart_id)
      .update({ state: 'completed' });

    console.log('Valor de pending_cart_id: ', this.pending_cart_id);
    this.pending_cart_id = '';
  }
}
