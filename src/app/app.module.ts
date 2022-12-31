import { NgModule, isDevMode } from '@angular/core';

// Modulos
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { LoginModule } from './login/login.module';

import { environment } from '../environments/environment';

// Componentes
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AppRoutingModule,
    LoginModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
