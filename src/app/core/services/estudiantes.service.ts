import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estudiante } from '../model/estudiante.model';

@Injectable({
  providedIn: 'root'
})
export class EstudiantesService {
  private readonly API_URL = 'http://localhost:3000/sistemaDerivacion/api/estudiante'; // Updated port number
  constructor( private readonly http: HttpClient) { }

   // Obtener todos los estudiantes
   getEstudiantes(): Observable<Estudiante[]> {
    return this.http.get<Estudiante[]>(this.API_URL);
  }

  // Obtener un estudiante por ID
  getEstudianteById(id: string): Observable<Estudiante> {
    return this.http.get<Estudiante>(`${this.API_URL}/${id}`);
  }

  // Agregar un nuevo estudiante
  addEstudiante(estudiante: Estudiante): Observable<Estudiante> {
    return this.http.post<Estudiante>(this.API_URL, estudiante);
  }

  // Actualizar un estudiante existente
  updateEstudiante(id: string, estudiante: Estudiante): Observable<Estudiante> {
    return this.http.put<Estudiante>(`${this.API_URL}/${id}`, estudiante);
  }

  // Eliminar un estudiante
  deleteEstudiante(id: string): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${id}`);
  }


}
