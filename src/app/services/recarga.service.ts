
// recarga.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecargaService {
  private apiUrl = 'http://localhost:8080/recargas'; // Reemplaza con la URL de tu backend

  constructor(private http: HttpClient) {}

  realizarRecarga(recarga: any): Observable<string> {
    return this.http.post<string>(`${this.apiUrl}/realizarRecarga`, recarga);
  }
}
