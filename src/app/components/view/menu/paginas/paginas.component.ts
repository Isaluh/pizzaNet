import { NgFor, NgOptimizedImage } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'menu-paginas',
  standalone: true,
  imports: [NgOptimizedImage, NgFor],
  templateUrl: './paginas.component.html',
  styleUrl: './paginas.component.css'
})

export class PaginasComponent{
  rotaAtual : string =  "";

  constructor(private router: Router){
    this.rotaAtual = router.url
    for(let item of this.menuLista){
      if(item[0] == this.rotas[this.rotaAtual]){
        item.push("atual");
      }
      else{
        item.push("");
      }
    }
  }

  private rotas : any = {
    "/" : "Pizzas",
    "/login" : "Login",
    "/bebidas" : "Bebidas"
  }

  public menuLista : string [][] = [
    ["Login", "./assets/login.svg"], ["Pizzas", "./assets/pizzas.svg"], ["Bebidas", "./assets/bebidas.svg"], ["Ver Pedido", "./assets/pedido.svg"], ["Populares", "./assets/populares.svg"], ["Histórico", "./assets/historico.svg"], ["Concluir pedido", "./assets/comprar.svg"], ["Feedback", "./assets/feedback.svg"]
  ];

  over(event : any){
    if(event.target.parentNode.getAttribute("class") == "atual") return
    event.target.parentNode.querySelector("h2").removeAttribute("hidden");
    event.target.setAttribute("hidden", "");

  }

  out(event : any){
    if(event.target.parentNode.getAttribute("class") == "atual") return
    event.target.parentNode.querySelector("h2").setAttribute("hidden", "");
    event.target.removeAttribute("hidden");
  }

  // fazer o atual n aparecer igm e sim o h2
}
