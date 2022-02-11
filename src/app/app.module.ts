import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TipoDeJoyaComponent } from './tipo-de-joya/tipo-de-joya.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { SideComponent } from './side/side.component';
import { FooterComponent } from './footer/footer.component';
import { PortadaComponent } from './portada/portada.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    TipoDeJoyaComponent,
    GaleriaComponent,
    SideComponent,
    FooterComponent,
    PortadaComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
