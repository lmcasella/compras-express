import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  AbstractControl,
  ReactiveFormsModule,
  ValidationErrors,
} from '@angular/forms';
import { FormlyModule, FormlyFieldConfig } from '@ngx-formly/core';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MaterialModule } from '../material/material.module';
import { AgGridModule } from 'ag-grid-angular';
import { ToastrModule } from 'ngx-toastr';

import { NavbarPageComponent } from './navbar/pages/navbar-page.component';
import { NavbarTitleComponent } from './navbar/components/navbar-title/navbar-title.component';
import { NavbarCartComponent } from './navbar/components/navbar-cart/navbar-cart.component';
import { NavbarProfileComponent } from './navbar/components/navbar-profile/navbar-profile.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormlyModule.forRoot({
      validationMessages: [
        { name: 'required', message: 'Este campo es obligatorio' },
      ],
    }),
    FormlyMaterialModule,
    ReactiveFormsModule,
    MaterialModule,
    AgGridModule,
    ToastrModule.forRoot(),
  ],
  declarations: [
    NavbarPageComponent,
    NavbarTitleComponent,
    NavbarCartComponent,
    NavbarProfileComponent,
  ],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
    NavbarPageComponent,
    AgGridModule,
    ToastrModule,
  ],
})
export class SharedModule {}
