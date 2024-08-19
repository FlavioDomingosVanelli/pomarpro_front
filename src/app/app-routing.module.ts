import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { CadUsuarioComponent } from './pages/usuario/cad-usuario/cad-usuario.component';
import { CadMaterialComponent } from './pages/cad-material/cad-material.component';
import { CadProdutoComponent } from './pages/cad-produto/cad-produto.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { MovimentoComponent } from './movimento/movimento.component';

const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'cadUsuario',component:CadUsuarioComponent},
  {path:'cadMaterial',component:CadMaterialComponent},
  {path:'cadProduto',component:CadProdutoComponent},
  {path:'Cadastro',component:CadastroComponent},
  {path:'Movimento',component:MovimentoComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
