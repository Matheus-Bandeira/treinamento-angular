import { Component, OnInit, OnDestroy } from '@angular/core';
import { ResumoService } from './resumo.service';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit,OnDestroy {
  
  /*
    resumo = {
    consultas: {
      consultas_30dias_anteriores : 87,
      consultas_30dias_posteriores : 79
    },
    faturamento : {
      anterior : {
        valor : 100000,
        comparativo : 19
      },
      previsao : {
        valor : 90000,
	    	comparativo : -10	
      }
    }
  }

  flag = false;
  verifica(): boolean{
    if (this.resumo.faturamento.anterior.comparativo > 0){
      this.flag = true;
    }
    return this.flag;
  }
  
  */


  resumo;
  inscricao;
  constructor(private resumoService: ResumoService) { 
    
  }

  ngOnInit() {
   this.inscricao = this.resumoService.getResumo()
   .subscribe(dados => this.resumo = dados);
  }

  ngOnDestroy(){
    this.inscricao.unsubscribe();
  }

}
