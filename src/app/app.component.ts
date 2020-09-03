import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './Ejercicio/clase1/clase1.component.html',
  styleUrls: ['./Ejercicio/clase1/clase1.component.css']
})

export class AppComponent {
  title = 'pruebalucasmarino';
}

export class NuevoComponenteComponent implements OnInit {
  public ejemplo = "Hola";
  public ejemplo2 = "Hola Mundo 2";
  constructor() { }

  ngOnInit(): void {
  }

  PruebaClick(){
    this.ejemplo2 = "EJECUTAMOS EL EVENTO";
  }

}