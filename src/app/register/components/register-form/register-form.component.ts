import { Component } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { RegisterService } from '../../services/register.service';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css'],
})
export class RegisterFormComponent {
  constructor(
    private router: Router,
    private registerService: RegisterService
  ) {}

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      className: 'c-form-input',
      templateOptions: {
        type: 'email',
        label: 'Email',
        name: 'required',
        required: true,
      },
    },
    {
      key: 'password',
      type: 'input',
      className: 'c-form-input',
      templateOptions: {
        type: 'password',
        label: 'Contraseña',
        placeholder: 'Mínimo 6 caracteres',
        name: 'required',
        required: true,
      },
    },
    {
      key: 'password2',
      type: 'input',
      className: 'c-form-input',
      templateOptions: {
        type: 'password',
        label: 'Confirmar contraseña',
        placeholder: 'Repita la contraseña',
        name: 'required',
        required: true,
      },
    },
  ];

  ngOnInit() {}

  async signUp() {
    if (this.form.invalid) {
      return;
    } else {
      const { email, password } = this.model;
      if (password === this.model.password2) {
        try {
          const user = await this.registerService.register(email, password);
          if (user) {
            this.router.navigate(['/login']);
          } else {
            console.log('Error al registrar');
          }
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log('Las contraseñas no coinciden');
      }
    }
  }
}
