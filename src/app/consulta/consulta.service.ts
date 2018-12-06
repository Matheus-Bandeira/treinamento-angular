import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConsultaService {

  constructor(private hhtp: HttpClient) { }

  getConsultas(){
    return this.hhtp.get(environment.apiUrl + "/consulta");
  }
}
