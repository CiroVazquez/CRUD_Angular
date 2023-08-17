import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { enviroment } from 'environment/environment';
import { Observable } from 'rxjs';
import { Mascota } from '../interfaces/mascota';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})

export class MascotaService {
  private myAppUrl: string = enviroment.endpoint;
  private myApiUrl: string = 'api/Mascota/';


constructor(private http: HttpClient) { }

getMascotas(): Observable<Mascota[]> {
  return this.http.get<Mascota[]>(`${this.myAppUrl}${this.myApiUrl}`);
}

getMascotaById(id: number): Observable<Mascota> {
  return this.http.get<Mascota>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

deleteMascota(id: number): Observable<void>{
  return this.http.delete<void>(`${this.myAppUrl}${this.myApiUrl}${id}`);
}

addMascota(mascota: Mascota): Observable<Mascota>{
  return this.http.post<Mascota>(`${this.myAppUrl}${this.myApiUrl}`, mascota);
}

updateMascota(id: number, mascota: Mascota) : Observable<void>{
  return this.http.put<void>(`${this.myAppUrl}${this.myApiUrl}${id}`, mascota);
}

}
