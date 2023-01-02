import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { HomePageComponent } from './pages/home-page/home-page.component';
import { ItemsComponent } from './components/items/items.component';

@NgModule({
  declarations: [HomePageComponent, ItemsComponent],
  imports: [CommonModule, MaterialModule, SharedModule],
  exports: [HomePageComponent],
})
export class HomeModule {}
