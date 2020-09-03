import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nuevo-componente',
  templateUrl: './nuevo-componente.component.html',
  styleUrls: ['./nuevo-componente.component.css']
})

export class AppComponent {
  title = 'pruebalucas';
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