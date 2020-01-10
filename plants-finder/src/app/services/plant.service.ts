import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IPlant } from '../interfaces/plant';
import { timeout, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlantService {
  apiUrl: string;
  constructor(private httpClient: HttpClient) {
    this.apiUrl = environment.apiUrl;
   }

   getPlants(limit: number, offset: number) {
    return this.httpClient
      .get<IPlant[]>(`${this.apiUrl}&$limit=${limit}&$offset=${offset}`, {
      })
      .pipe(timeout(10000), catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }));
  }

  getPlantsByColumnName(filterColumn: string, value: string) {
    return this.httpClient
      .get<IPlant[]>(`${this.apiUrl}&$limit=10&${filterColumn}=${value}`, {
      })
      .pipe(timeout(10000), catchError((error: HttpErrorResponse) => {
        return throwError(error);
      }));
  }
}
