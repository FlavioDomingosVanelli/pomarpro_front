import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
//import { FontAwesomeModule} from './@fotawesome/angular-fontawesome';
import { ReactiveFormsModule } from '@angular/forms';
import {  provideHttpClient } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CadMaterialComponent } from './pages/cad-material/cad-material.component';
import { CadProdutoComponent } from './pages/cad-produto/cad-produto.component';
import { PomarComponent } from './pomar/pomar.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MovimentoComponent } from './movimento/movimento.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    MenuComponent,
    CadUsuarioComponent,
    CadMaterialComponent,
    CadProdutoComponent,
    PomarComponent,
    CadastroComponent,
    MovimentoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //FontAwesomeModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule,
  ],
  providers: [provideHttpClient(), provideAnimationsAsync()],
  bootstrap: [AppComponent]
})
export class AppModule { }
