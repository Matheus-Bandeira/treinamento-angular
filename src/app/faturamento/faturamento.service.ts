import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FaturamentoService {

  constructor(private http: HttpClient) { }

  getFaturas(){
   return this.http.get(environment.apiUrl + "faturamento");
  }
}
