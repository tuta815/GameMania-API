import { Component, OnInit } from '@angular/core';
import { Produtos } from 'src/app/models/produtos';
import { DetalhesDestaquesService } from 'src/app/services/detalhes-destaques.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private produtosService: DetalhesDestaquesService) { }
  listaProdutos = [] as Produtos[]

  ngOnInit(): void {
    this.carregarProdutos()
  }

  carregarProdutos() {
    this.produtosService.getProdutos().subscribe((produtosRecebidos: Produtos[]) => {
      this.listaProdutos = produtosRecebidos;
      console.log(this.listaProdutos);
    }

    )
  }
}
