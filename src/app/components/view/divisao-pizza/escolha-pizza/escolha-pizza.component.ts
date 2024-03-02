import { Component, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { AjudaComponent } from './ajuda/ajuda.component';
import { EscolhasComponent } from './escolhas/escolhas.component';
import { TamanhoPizza } from "../../../../../models/pedido.modelo";

@Component({
  selector: 'escolha-pizza',
  standalone: true,
  imports: [AjudaComponent, EscolhasComponent],
  templateUrl: './escolha-pizza.component.html',
  styleUrl: './escolha-pizza.component.css'
})
export class EscolhaPizzaComponent implements AfterViewInit {
  private tamanhoPizza:TamanhoPizza = TamanhoPizza.NULL;

  @ViewChild("opt1") pequena!: EscolhasComponent;
  @ViewChild("opt2") media!: EscolhasComponent;
  @ViewChild("opt3") grande!: EscolhasComponent;


  constructor() {
    
  }
  ngAfterViewInit():void {
    let tamanhos:EscolhasComponent[] = [this.pequena, this.media, this.grande]
    for (let tamanho of tamanhos) {
      tamanho.changeTamanho = (tamanho:TamanhoPizza) =>  {
        if (this.tamanhoPizza == tamanho) {
          this.tamanhoPizza = TamanhoPizza.NULL;
        } else {
          this.tamanhoPizza = tamanho;
        }
      }
      tamanho.desmarcarOutras = ()=>{
        for (let tamanho_ of tamanhos) {
          if (tamanho == tamanho_ && tamanho.selecionada == false) {
            tamanho_.selecionada = true;
          } else {
            tamanho_.selecionada = false;
          }
        }
      }
    }
    // this.pequena.changeTamanho = (tamanho:TamanhoPizza) =>  {
    //   this.tamanhoPizza = tamanho;
    // }
    // this.media.changeTamanho = (tamanho:TamanhoPizza) =>  {
    //   this.tamanhoPizza = tamanho;
    // }
    // this.grande.changeTamanho = (tamanho:TamanhoPizza) =>  {
    //   this.tamanhoPizza = tamanho;
    // }
    // this.pequena.desmarcarOutras = (x:string) =>  {
    //   this.tamanhosMarcados[]
    // }
    // this.media.desmarcarOutras = (x:string) =>  {

    // }
    // this.grande.desmarcarOutras = (x:string) =>  {

    // }
  }

  getTamanho():TamanhoPizza {
    return this.tamanhoPizza;
  }

}
