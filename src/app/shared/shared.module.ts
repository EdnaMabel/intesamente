import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeneficiosComponent } from './beneficios/beneficios.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AgendarComponent } from './agendar/agendar.component';
import { TestimoniosComponent } from './testimonios/testimonios.component';
import { ClientesComponent } from './clientes/clientes.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [BeneficiosComponent, ServiciosComponent, AgendarComponent, TestimoniosComponent, ClientesComponent, FooterComponent],
  exports: [
    BeneficiosComponent,
    ServiciosComponent,
    AgendarComponent,
    TestimoniosComponent,
    ClientesComponent,
    FooterComponent
  ],
  
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
