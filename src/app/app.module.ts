import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//shared
import { SharedModule } from './shared/shared.module';

//avisos
import { AvisosComponent } from './components/avisos/avisos.component';

//environments and firebase
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';// Firestore (Base de datos)
import { AngularFireAuthModule } from '@angular/fire/compat/auth'; //Importar Autentificacion
import { AngularFireStorageModule } from '@angular/fire/compat/storage';

@NgModule({
  declarations: [
    AppComponent,
    AvisosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    //shared
    SharedModule,
    //firebase
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
 