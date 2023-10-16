import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIClientService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'access-control-allow-origin': '*'
    })
  };

  apiUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  getPublicaciones(): Observable<any> {
    return this.http.get(this.apiUrl + '/publicaciones/').pipe(
      retry(3)
    );
  }

  getPublicacion(idPublicacion: number): Observable<any> {
    return this.http.get(this.apiUrl + '/publicaciones/' + idPublicacion).pipe(
      retry(3)
    );
  }

  createPublicacion(publicacion: any): Observable<any> {
    return this.http.post(this.apiUrl + '/publicaciones/', publicacion, this.httpOptions).pipe(
      retry(3)
    );
  }

  updatePublicacion(publicacion: any): Observable<any> {
    return this.http.put(this.apiUrl + '/publicaciones/' + publicacion.id, publicacion, this.httpOptions)
      .pipe(retry(3)
    );
  }

  deletePublicacion(publicacionId: number): Observable<any> {
    return this.http.delete(this.apiUrl + '/publicaciones/' + publicacionId, this.httpOptions).pipe(
      retry(3)
    );
  }

}
