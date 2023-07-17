import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  //Creamos variable para almacenar la URL de la API que me devuelve el inventario
  private urlApi = "http://localhost:8080/api/inventory";

  constructor(private http: HttpClient) { }

  public getData(): Observable<any>{
    return this.http.get<any>(this.urlApi);
  }

  public getOne(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/product/${id}`)
  }
}
