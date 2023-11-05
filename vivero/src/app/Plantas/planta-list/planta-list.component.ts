import { Component, OnInit } from '@angular/core';
import { Planta } from '../planta';
import { PlantasService } from '../plantas.service';

@Component({
  selector: 'app-planta-list',
  templateUrl: './planta-list.component.html',
  styleUrls: ['./planta-list.component.css']
})
export class PlantaListComponent implements OnInit {


  ListaPlantas: Array<Planta> = [];
  cantidadInterior: number = 0;
  cantidadExterior: number = 0;
  
  constructor(private plantaService: PlantasService) { }

  getListPlantas(): void  {
    this.plantaService.getPlantas().subscribe((ListaPlantas) => {this.ListaPlantas = ListaPlantas})
  }

  getCantidadInterior():void {
    this.plantaService.getPlantas().subscribe((Datos) => {
      this.cantidadInterior = Datos.filter((plantas) => plantas.tipo === "Interior").length })
  }

  getCantidadExterior():void {
    this.plantaService.getPlantas().subscribe((Datos) => {
      this.cantidadExterior = Datos.filter((plantas) => plantas.tipo === "Exterior").length })
  }


  ngOnInit() {
    this.getListPlantas();
    this.getCantidadInterior();
    this.getCantidadExterior();

  }

}
