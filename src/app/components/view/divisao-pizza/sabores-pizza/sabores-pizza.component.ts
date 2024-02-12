import { Component } from '@angular/core';
import { ListaSaboresComponent } from './lista-sabores/lista-sabores.component';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { Sabor } from '../../../../../models/sabores.modelo';
import { SaboresService } from '../../../../services/sabores.service';
import { BotoesComponent } from '../../botoes/botoes.component';

@Component({
  selector: 'sabores-pizza',
  standalone: true,
  imports: [ListaSaboresComponent, NgOptimizedImage, NgFor, BotoesComponent],
  templateUrl: './sabores-pizza.component.html',
  styleUrl: './sabores-pizza.component.css'
})
export class SaboresPizzaComponent {
  sabores: Sabor[] = [];
  paginaAtual: Sabor[] = [];
  colunaEs : Sabor[] = [];
  colunaDi : Sabor[] = [];
  paginaIndex: number = 0;

  constructor(private saboresService: SaboresService) {
    this.obterSaboresPizza();
    this.criarPaginaAtual();
  }

  obterSaboresPizza() {
    this.saboresService.getSabores()
    .subscribe(sabores => this.sabores = sabores)
  }

  criarPaginaAtual() {
    let tempArray: Sabor[] = [];
    let i: number = this.paginaIndex*4;
    while (i < this.paginaIndex*4 + 4 && i < this.sabores.length) {
      tempArray.push(this.sabores[i]);
      i += 1;
    }
    i = tempArray.length;
    this.paginaAtual = tempArray;
    i = 0;
    this.colunaEs = [];
    this.colunaDi = [];
    while (i < 4 && i < tempArray.length) {
      if(i < 2){
        this.colunaEs.push(tempArray[i]);
      }else{
        this.colunaDi.push(tempArray[i]);
      }
      i += 1;
    }
  }

  proximaPagina() {
    if (this.paginaIndex * 4 > this.sabores.length ) {
        this.paginaIndex = 0;
    } else {
      this.paginaIndex += 1;
    }
    this.criarPaginaAtual;
  }

  voltarPagina(){

  }
}
