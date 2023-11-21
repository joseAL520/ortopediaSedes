import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { SedeComponent } from './componets/sede/sede.component';
import { ProductoComponent } from './componets/producto/producto.component';
import { ClaseComponent } from './componets/clase/clase.component';
import { EntrenadoresComponent } from './componets/entrenadores/entrenadores.component';
import { CarouselComponent } from './componets/producto/carousel/carousel.component';
import { ConteinerPoductioComponent } from './componets/producto/conteiner-poductio/conteiner-poductio.component';
import { CarosuelSedeComponent } from './componets/sede/carosuel-sede/carosuel-sede.component';
import { TablePromotionsComponent } from './componets/sede/table-promotions/table-promotions.component';
import { LoginComponent } from './login/login.component';
import { RegistrerUserComponent } from './componets/clase/registrer-user/registrer-user.component';
import { ListaRegistrerUserComponent } from './componets/clase/lista-registrer-user/lista-registrer-user.component';
import { HttpClientModule } from '@angular/common/http';
import { ListRegisterService } from './services/list-register.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SedeComponent,
    ProductoComponent,
    ClaseComponent,
    EntrenadoresComponent,
    CarouselComponent,
    ConteinerPoductioComponent,
    CarosuelSedeComponent,
    TablePromotionsComponent,
    LoginComponent,
    RegistrerUserComponent,
    ListaRegistrerUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ListRegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
