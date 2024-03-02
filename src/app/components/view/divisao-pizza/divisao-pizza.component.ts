import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { EscolhaPizzaComponent } from './escolha-pizza/escolha-pizza.component';
import { SaboresPizzaComponent } from './sabores-pizza/sabores-pizza.component';
import {  Pedido, ItemPizza, ItemBebida,
          TamanhoPizza, CategoriaBebida } from '../../../../models/pedido.modelo';
import { BotoesComponent } from '../botoes/botoes.component';
@Component({
  selector: 'app-divisao-pizza',
  standalone: true,
  imports: [EscolhaPizzaComponent, SaboresPizzaComponent],
  templateUrl: './divisao-pizza.component.html',
  styleUrl: './divisao-pizza.component.css'
})
export class DivisaoPizzaComponent implements AfterViewInit  {
  pedido: Pedido = {
    bebidas : [],
    pizzas  : []
  };

  @ViewChild(EscolhaPizzaComponent) tamanhoPizzaTs!:EscolhaPizzaComponent;
  @ViewChild(SaboresPizzaComponent) SaborPizzaTs!:SaboresPizzaComponent;

  constructor() {
    
  }

  ngAfterViewInit(): void {
    this.SaborPizzaTs.getTamanho = this.tamanhoPizzaTs.getTamanho;
  }

  addPizza (pizza:ItemPizza) {
    this.pedido.pizzas.push(pizza)
  }

  addBebida (bebida:ItemBebida) {
    this.pedido.bebidas.push(bebida);
  }

}
