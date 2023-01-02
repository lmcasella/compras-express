import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

import { RegisterTitleComponent } from './components/register-title/register-title.component';
import { RegisterOptionsLoginComponent } from './components/register-options-login/register-options-login.component';
//import { RegisterRoutingModule } from './register-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    RegisterPageComponent,
    RegisterFormComponent,
    RegisterTitleComponent,
    RegisterOptionsLoginComponent,
  ],
  imports: [CommonModule, MaterialModule, SharedModule, RouterModule],
  exports: [RegisterPageComponent],
})
export class RegisterModule {}
