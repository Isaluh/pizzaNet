import { Component } from '@angular/core';
import { MenuComponent } from './menu/menu.component';
import { DivisaoPizzaComponent } from './divisao-pizza/divisao-pizza.component';

@Component({
  selector: 'app-view',
  standalone: true,
  imports: [MenuComponent, DivisaoPizzaComponent],
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

}
