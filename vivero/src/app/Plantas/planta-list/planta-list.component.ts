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

  constructor(private plantaService: PlantasService) { }

  getListPlantas(): void {
    this.plantaService.getPlantas().subscribe((ListaPlantas) => {this.ListaPlantas = ListaPlantas}

    )
  }

  ngOnInit() {
    this.getListPlantas();
  }

}
