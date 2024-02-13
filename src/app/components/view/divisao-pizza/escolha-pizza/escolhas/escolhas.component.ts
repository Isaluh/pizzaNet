import { NgOptimizedImage } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'pizza-escolhas',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './escolhas.component.html',
  styleUrl: './escolhas.component.css'
})
export class EscolhasComponent {
  @Input("tamanho") tamanho: string = "";
  @Input("pedaco") pedaco: string = "";
  @Input("img") img: string = "";
  @Output("escolhaPizza") onclick = new EventEmitter();

  escolhaPizza(tamanho : string){
    if(tamanho == "Pequena"){
      
    }
    if(tamanho == "Média"){
      
    }
    if(tamanho == "Grande"){
      
    }
    var escolhaTamanho = tamanho;
  }

}
