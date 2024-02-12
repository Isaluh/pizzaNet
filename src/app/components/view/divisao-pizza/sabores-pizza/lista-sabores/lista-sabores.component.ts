import { Component, Input, OnInit } from '@angular/core';
import { SaboresService } from '../../../../../services/sabores.service';

@Component({
  selector: 'lista-sabores',
  standalone: true,
  imports: [],
  templateUrl: './lista-sabores.component.html',
  styleUrl: './lista-sabores.component.css'
})
export class ListaSaboresComponent implements OnInit {
  @Input("sabor") sabor : string = "";
  @Input("ingredientes") ingredientes : string = "";


  ngOnInit(): void {
  }
  
}