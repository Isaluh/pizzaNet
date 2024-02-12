import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sabor } from '../../models/sabores.modelo';

@Injectable({
  providedIn: 'root'
})

export class SaboresService {

  // private _httpClient: HttpClient;
  private API_url: string = "http://26.110.127.246:3080/sabores/3";

  constructor(private httpClient:HttpClient) {
  }

  getSabores() {
      return this.httpClient.get<Sabor[]>(this.API_url);
  }
}
