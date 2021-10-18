import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Coffee} from "../interfaces/coffee";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getCoffee(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>('api/coffee')
      .pipe(
        tap(_ => console.log('coffee are fetched'))
      );
  }

  getCoffeeById(id: number): Observable<Coffee> {
    return this.http.get<Coffee>(`api/coffee/${id}`)
      .pipe(
        tap(_ => console.log(`coffee with id ${id} is fetched`))
      );
  }
}
