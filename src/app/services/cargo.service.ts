import { Cargo } from './../models/cargo.model';
import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargoService {

  private apiUrl = 'http://localhost:8082/api/v1';
  private http = inject(HttpClient);

  // obtener todos los cargos
  getCargos(): Observable<Cargo[]>{
    return this.http.get<Cargo[]>(`${this.apiUrl}/cargos`)
    .pipe(
      map((resp:any) => resp.cargos as Cargo[] )
    );
  }

  // obtener un cargo por id
  getCargoById(id:number):Observable<Cargo>{
    return this.http.get<Cargo>(`${this.apiUrl}/cargos/${id}`);
  }

  // crear un nuevo cargo
  createCargo(cargo:Cargo):Observable<Cargo>{
    return this.http.post<Cargo>(`${this.apiUrl}/cargos`,cargo).pipe(
      catchError((e) => {
        console.log(e.error);
        return throwError(e);
      }));
  }

  // eliminar un cargo
  deleteCargo(id:number):Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/cargos/${id}`);
  }  
}
