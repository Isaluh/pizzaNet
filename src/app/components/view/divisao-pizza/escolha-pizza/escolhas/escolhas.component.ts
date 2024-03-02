import { NgIf, NgOptimizedImage} from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TamanhoPizza } from "../../../../../../models/pedido.modelo"


@Component({
  selector: 'pizza-escolhas',
  standalone: true,
  imports: [NgOptimizedImage, NgIf],
  templateUrl: './escolhas.component.html',
  styleUrl: './escolhas.component.css'
})
export class EscolhasComponent {
  @Input("tamanho") tamanho: string = "";
  @Input("pedaco") pedaco: string = "";
  @Input("img") img: string = "";
  public selecionada:boolean = false;
  
  selectMe (tamanho:string) {
    let tamanhoPizza: TamanhoPizza;
    switch (tamanho) {
      case "Pequena":
        tamanhoPizza = TamanhoPizza.PEQUENA;
        break;
        case "Média":
        tamanhoPizza = TamanhoPizza.MEDIA;
        break;
        case "Grande":
          tamanhoPizza = TamanhoPizza.GRANDE;
        break;
      default:
        return;
    }
    this.changeTamanho(tamanhoPizza);
    this.desmarcarOutras()
  }

  desmarcarOutras() { //TODO
    //essa função é sobreescrevida em escolha-pizza.components
  }

  changeTamanho(x:TamanhoPizza):void {
    //essa função é sobreescrevida em escolha-pizza.components
  }

}
