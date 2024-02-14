import { Component, OnInit } from '@angular/core';
import { ListaSaboresComponent } from './lista-sabores/lista-sabores.component';
import { NgFor, NgOptimizedImage, NgIf } from '@angular/common';
import { Sabor, PaginaSabor } from '../../../../../models/sabores.modelo';
import { SaboresService } from '../../../../../services/sabores.service';
import { BotoesComponent } from '../../botoes/botoes.component';

@Component({
  selector: 'sabores-pizza',
  standalone: true,
  imports: [ListaSaboresComponent, NgOptimizedImage, NgFor, NgIf, BotoesComponent],
  templateUrl: './sabores-pizza.component.html',
  styleUrl: './sabores-pizza.component.css'
})
export class SaboresPizzaComponent implements OnInit {
  sabores: Sabor[] = [];
  colunaEs : Sabor[] = [];
  colunaDi : Sabor[] = [];
  tamanhoPagina: number = 4;
  public pagina: PaginaSabor = {
    "data": [],
    "currentPage": -1,
    "totalItems": -1,
    "totalPages": -1
  };
  constructor(private saboresService: SaboresService) { }

  ngOnInit(): void {
    this.loadSabores(1, this.tamanhoPagina);
  }
  loadSabores(pagina:number, tamanho:number) {
    this.getSabores(pagina, tamanho);
  }

  nextPage() {
    if (this.pagina.currentPage >= this.pagina.totalPages) {
        return;
      }
    this.getSabores(this.pagina.currentPage + 1, this.tamanhoPagina)
    

  }
  previousPage() {
    if (this.pagina.currentPage <= 1) {
      return;
    }
    this.getSabores(this.pagina.currentPage - 1, this.tamanhoPagina)
  }

  getSabores(pagina:number, tamanho:number) {
    this.saboresService.getSabores(pagina, tamanho)
    .subscribe(sabores => {
      this.pagina = sabores;
      this.sabores = sabores.data;
      this.criarPaginaAtual();
    })
  }

  criarPaginaAtual() {
    let i: number = 0;
    this.colunaEs = [];
    this.colunaDi = [];

    while ( i < this.sabores.length) {
      if (i < this.tamanhoPagina / 2) {
        this.colunaEs.push(this.sabores[i])
      } else {
        this.colunaDi.push(this.sabores[i])
      }
      i++;      
    }
  }
}
