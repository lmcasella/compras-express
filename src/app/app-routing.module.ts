import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './login/pages/login-page/login-page.component';

const routes: Routes = [
  {
    path: '',
    component: LoginPageComponent,
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
