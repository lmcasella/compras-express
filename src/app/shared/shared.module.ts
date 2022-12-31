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

// export function emailValidator(
//   control: AbstractControl
// ): ValidationErrors | null {
//   const value = control.value;
//   return value && !value.includes('@') ? { email: true } : null;
// }

// export function emailValidatorMessage(err: any, field: FormlyFieldConfig) {
//   return `"${field.formControl?.value}" no es un email válido`;
// }

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormlyModule.forRoot({
      // validators: [{ name: 'email', validation: emailValidator }],
      // validationMessages: [
      //   { name: 'email', message: emailValidatorMessage },
      //   { name: 'required', message: 'Este campo es obligatorio' },
      // ],
      validationMessages: [
        { name: 'required', message: 'Este campo es obligatorio' },
      ],
    }),
    FormlyMaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  exports: [
    CommonModule,
    FlexLayoutModule,
    FormlyModule,
    FormlyMaterialModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
