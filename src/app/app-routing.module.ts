import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SedeComponent } from './componets/sede/sede.component';
import { ClaseComponent } from './componets/clase/clase.component';
import { EntrenadoresComponent } from './componets/entrenadores/entrenadores.component';
import { ProductoComponent } from './componets/producto/producto.component';

const routes: Routes = [
  {path:'',redirectTo: 'sede', pathMatch:'full'},
  {path:'sede',component:SedeComponent},
  {path:'producto',component:ProductoComponent},
  {path:'clase',component:ClaseComponent},
  {path:'entrenador',component:EntrenadoresComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
