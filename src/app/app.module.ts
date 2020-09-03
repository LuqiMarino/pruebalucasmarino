import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Clase1Component } from './Ejercicio/clase1/clase1.component';

@NgModule({
  declarations: [
    AppComponent,
    Clase1Component  
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
