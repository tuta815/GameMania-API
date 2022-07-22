import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtos } from 'src/app/models/produtos';
import { DetalhesDestaquesService } from 'src/app/services/detalhes-destaques.service';



@Component({
  selector: 'app-comprarpage',
  templateUrl: './comprarpage.component.html',
  styleUrls: ['./comprarpage.component.css']
})
export class ComprarpageComponent implements OnInit {

  constructor(private param: ActivatedRoute, private produtosService: DetalhesDestaquesService) { }
  getComprarId: any;
  comprarData: any;

  ngOnInit(): void {
    this.getComprarId = this.param.snapshot.paramMap.get('id')
    if (this.getComprarId) {
      this.produtosService.obterProduto(this.getComprarId).subscribe((value) => {
        console.log(value)
        this.comprarData = value;
      })
    }
  }

}
