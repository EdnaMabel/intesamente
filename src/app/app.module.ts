import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ServicesModule } from './services/services.module';
import { SharedModule } from './shared/shared.module';
import { ContactoModule } from './contacto/contacto.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServicesModule,
    SharedModule,
    ContactoModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
