import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produtos } from '../models/produtos';

@Injectable({
  providedIn: 'root'
})
export class DetalhesDestaquesService {

  url = "https://dtbdotuta.onrender.com/detalhesProdutos"

  constructor(private httpClient: HttpClient) { }

  getProdutos(): Observable<Produtos[]> {
    return this.httpClient.get<Produtos[]>(this.url)
  }
  obterProduto(id: number): Observable<Produtos> {
    return this.httpClient.get<Produtos>(`${this.url}/${id}`)
  }
}
