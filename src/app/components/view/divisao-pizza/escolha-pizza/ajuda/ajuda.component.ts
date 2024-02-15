import { NgOptimizedImage } from '@angular/common';
import { Component, Input} from '@angular/core';

@Component({
  selector: 'pizza-ajuda',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './ajuda.component.html',
  styleUrl: './ajuda.component.css'
})
export class AjudaComponent {
  @Input("msgHelp") msgHelp : string = `Para escolher uma pizza inteira, escolha o tamanho e depois selecione o sabor. Para escolher uma pizza metade metade, escolha o tamanho e depois selecione dois sabores.`;

  abrirAjuda(event : any){
    event.target.parentNode.querySelector("span").removeAttribute("hidden");
  }

  fecharAjuda(event : any){
    event.target.parentNode.querySelector("span").setAttribute("hidden", "");
  }
}
