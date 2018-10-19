import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-resumo',
  templateUrl: './resumo.component.html',
  styleUrls: ['./resumo.component.css']
})
export class ResumoComponent implements OnInit {
  
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

  

  constructor(private http: HttpClient) { 
    this.http.get
    ("http://www.devup.com.br/php/api-dashboard/api/resumo")
    .subscribe( resumo => this.resumo = resumo);
  }

  ngOnInit() {
  }

}
