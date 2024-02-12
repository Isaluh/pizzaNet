import { Component } from '@angular/core';
import { EscolhaPizzaComponent } from './escolha-pizza/escolha-pizza.component';
import { SaboresPizzaComponent } from './sabores-pizza/sabores-pizza.component';

@Component({
  selector: 'app-divisao-pizza',
  standalone: true,
  imports: [EscolhaPizzaComponent, SaboresPizzaComponent],
  templateUrl: './divisao-pizza.component.html',
  styleUrl: './divisao-pizza.component.css'
})
export class DivisaoPizzaComponent {

}
