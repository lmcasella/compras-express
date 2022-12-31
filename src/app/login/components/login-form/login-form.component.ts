import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
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
        name: 'required',
        required: true,
      },
    },
  ];

  ngOnInit() {}

  onSubmit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
    this.form.reset();
  }
}
