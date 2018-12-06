import { Component, OnInit, OnDestroy } from '@angular/core';
import { FaturamentoService } from './faturamento.service';

@Component({
  selector: 'app-faturamento',
  templateUrl: './faturamento.component.html',
  styleUrls: ['./faturamento.component.css']
})
export class FaturamentoComponent implements OnInit, OnDestroy {

  faturamentoIncricao;
  faturamento;

  constructor(private faturamentoService: FaturamentoService) { }

  ngOnInit() {
    this.faturamentoIncricao = this.faturamentoService.getFaturas()
    .subscribe(dados => this.faturamento = dados);
  }

  ngOnDestroy(){
    this.faturamentoIncricao.unsubscribe();
  }

}
