import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginaSabor, Sabor } from '../models/sabores.modelo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class SaboresService {

  // private _httpClient: HttpClient;
  private API_url: string = "http://192.168.0.111:3080/sabores2?page=$PAGINA&size=$TAMANHO";

  constructor(private httpClient:HttpClient) {
  }

  getSabores(pagina:number, tamanho:number): Observable<PaginaSabor> {
      let url:string = this.API_url;

      url = url.replace("$PAGINA", String(pagina));
      url = url.replace("$TAMANHO", String(tamanho));
      return this.httpClient.get<PaginaSabor>(url);
  }
}
