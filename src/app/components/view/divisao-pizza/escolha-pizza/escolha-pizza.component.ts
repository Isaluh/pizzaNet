import { Component } from '@angular/core';
import { AjudaComponent } from './ajuda/ajuda.component';
import { EscolhasComponent } from './escolhas/escolhas.component';

@Component({
  selector: 'escolha-pizza',
  standalone: true,
  imports: [AjudaComponent, EscolhasComponent],
  templateUrl: './escolha-pizza.component.html',
  styleUrl: './escolha-pizza.component.css'
})
export class EscolhaPizzaComponent {

}
