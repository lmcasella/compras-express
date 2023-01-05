import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CartPageComponent } from '../../../../home/pages/cart-page/cart-page.component';

@Component({
  selector: 'app-navbar-cart',
  templateUrl: './navbar-cart.component.html',
  styleUrls: ['./navbar-cart.component.css'],
})
export class NavbarCartComponent {
  constructor(public dialog: MatDialog) {}

  openSidenavCart() {
    const dialogRef = this.dialog.open(CartPageComponent, {
      width: '700px',
      height: '100%',
      position: { top: '0', right: '0' },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
