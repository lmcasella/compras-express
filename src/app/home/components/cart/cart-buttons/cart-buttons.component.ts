import { Component } from '@angular/core';
import { HomeService } from '../../../services/home.service';

@Component({
  selector: 'app-cart-buttons',
  templateUrl: './cart-buttons.component.html',
  styleUrls: ['./cart-buttons.component.css'],
})
export class CartButtonsComponent {
  constructor(public homeService: HomeService) {}
}
