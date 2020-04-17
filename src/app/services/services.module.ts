import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TerapiaParejaComponent } from './terapia-pareja/terapia-pareja.component';
import { TerapiaIndividualComponent } from './terapia-individual/terapia-individual.component';
import { PsicologiaInfantilComponent } from './psicologia-infantil/psicologia-infantil.component';
import { TerapiaAdolescentesComponent } from './terapia-adolescentes/terapia-adolescentes.component';
import { TerapiaOcupacionalComponent } from './terapia-ocupacional/terapia-ocupacional.component';
import { ColegioComponent } from './colegio/colegio.component';
import { FonouadiologiaComponent } from './fonouadiologia/fonouadiologia.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [TerapiaParejaComponent, TerapiaIndividualComponent, PsicologiaInfantilComponent, TerapiaAdolescentesComponent, TerapiaOcupacionalComponent, ColegioComponent, FonouadiologiaComponent],
 
  imports: [
    CommonModule,
    SharedModule
  
  
    
  ]
})
export class ServicesModule { }
