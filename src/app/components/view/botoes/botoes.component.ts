import { Component, Input, Output, EventEmitter } from '@angular/core';

type BtnVariants = "normal196" | "normal176" | "opinar";

@Component({
  selector: 'app-botoes',
  standalone: true,
  imports: [],
  templateUrl: './botoes.component.html',
  styleUrl: './botoes.component.css'
})

export class BotoesComponent {
  @Input("text") text: string = "";
  @Input() variant: BtnVariants = "normal196";
  @Output("submit") onSubmit = new EventEmitter();

  submit(){
    //essa função deve ser sobreescrita
  }
}
