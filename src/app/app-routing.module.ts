import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ColegioComponent } from './services/colegio/colegio.component';
import { FonouadiologiaComponent } from './services/fonouadiologia/fonouadiologia.component';
import { PsicologiaInfantilComponent } from './services/psicologia-infantil/psicologia-infantil.component';
import { TerapiaOcupacionalComponent } from './services/terapia-ocupacional/terapia-ocupacional.component';
import { TerapiaParejaComponent } from './services/terapia-pareja/terapia-pareja.component';
import { TerapiaAdolescentesComponent } from './services/terapia-adolescentes/terapia-adolescentes.component';
import { TerapiaIndividualComponent } from './services/terapia-individual/terapia-individual.component';
import { FormularioComponent } from './contacto/formulario/formulario.component';






const routes: Routes = [
  { path: 'colegio', component: ColegioComponent },
  { path: 'fonoaudiologia', component: FonouadiologiaComponent },
  { path: 'psicologiainfantil', component: PsicologiaInfantilComponent},
  { path: 'terapiaocupacional', component: TerapiaOcupacionalComponent},
  { path: 'terapiapareja', component: TerapiaParejaComponent},
  { path: 'terapiaadolescentes', component: TerapiaAdolescentesComponent},
  { path: 'terapiaindividual', component: TerapiaIndividualComponent},
  { path: 'formulario', component: FormularioComponent},
  { path: 'home', component: HomeComponent },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
