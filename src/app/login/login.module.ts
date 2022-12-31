import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LoginRoutingModule } from './login-routing.module';
import { MaterialModule } from '../material/material.module';
import { SharedModule } from '../shared/shared.module';
import { LoginTitleComponent } from './components/login-title/login-title.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { LoginButtonComponent } from './components/login-button/login-button.component';
import { LoginOptionsRegisterComponent } from './components/login-options-register/login-options-register.component';

@NgModule({
  declarations: [LoginPageComponent, LoginTitleComponent, LoginFormComponent, LoginButtonComponent, LoginOptionsRegisterComponent],
  imports: [CommonModule, LoginRoutingModule, MaterialModule, SharedModule],
  exports: [LoginPageComponent],
})
export class LoginModule {}
