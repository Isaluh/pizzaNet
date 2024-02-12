import { Component } from '@angular/core';
import { InformacoesComponent } from './informacoes/informacoes.component';
import { LogoComponent } from './logo/logo.component';
import { NgOptimizedImage } from '@angular/common';
import { PaginasComponent } from './paginas/paginas.component';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [LogoComponent, InformacoesComponent, NgOptimizedImage, PaginasComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
