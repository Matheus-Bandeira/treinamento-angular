import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResumoComponent } from './resumo/resumo.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { RouterModule } from '@angular/router';
import { FaturamentoComponent } from './faturamento/faturamento.component';

let routes = [
  { path : "resumo", component: ResumoComponent},
  { path : "consulta", component: ConsultaComponent},
  { path: "faturamento", component: FaturamentoComponent},
  { path : "**", redirectTo:"/resumo"}
 ]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
