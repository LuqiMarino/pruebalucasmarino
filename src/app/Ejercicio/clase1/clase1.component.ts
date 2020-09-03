import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clase1',
  templateUrl: './clase1.component.html',
  styleUrls: ['./clase1.component.css']
})
export class Clase1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public CalcularPromedio():void{    
    var edad1 = parseInt((<HTMLInputElement>document.getElementById("edad1")).value);
    var edad2 = parseInt((<HTMLInputElement>document.getElementById("edad2")).value);
    var prom = (edad1+edad2) / 2;
    alert(prom);
  }

  public Limpiar():void{    
    (<HTMLInputElement>document.getElementById("edad1")).value = "";
    (<HTMLInputElement>document.getElementById("edad2")).value = "";
  }

}
