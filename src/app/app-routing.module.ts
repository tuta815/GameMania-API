import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComprarpageComponent } from './pages/comprarpage/comprarpage.component';
import { ContatoComponent } from './pages/contato/contato.component';
import { DestaquesComponent } from './pages/destaques/destaques.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'comprar/:id', component: ComprarpageComponent },
  { path: 'destaques', component: DestaquesComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
