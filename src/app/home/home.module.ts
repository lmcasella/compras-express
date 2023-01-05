import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ItemsComponent } from './components/items/items.component';
import { CartPageComponent } from './pages/cart-page/cart-page.component';
import { CartTitleComponent } from './components/cart/cart-title/cart-title.component';
import { CartGridComponent } from './components/cart/cart-grid/cart-grid.component';
import { CartTotalComponent } from './components/cart/cart-total/cart-total.component';
import { CartButtonsComponent } from './components/cart/cart-buttons/cart-buttons.component';

@NgModule({
  declarations: [
    HomePageComponent,
    ItemsComponent,
    CartPageComponent,
    CartTitleComponent,
    CartGridComponent,
    CartTotalComponent,
    CartButtonsComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
