import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AgendarComponent } from './agendar/agendar.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [BeneficiosComponent, ServiciosComponent, AgendarComponent, TestimoniosComponent, ClientesComponent, FooterComponent, MenuComponent],
  exports: [
    BeneficiosComponent,
    ServiciosComponent,
    AgendarComponent,
    TestimoniosComponent,
    ClientesComponent,
    FooterComponent,
    MenuComponent
  ],
  
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class SharedModule { }
