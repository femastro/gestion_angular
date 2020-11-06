import { User } from './../interfaces/user.interface';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]>{
    return this.http
      .get<User[]>(`${environment.API_URL}/tire/`)
      .pipe(catchError(this.handlerError));
  }

  getUser(id: number): Observable<any> {
    return this.http
      .get<any>(`${environment.API_URL}/tire/${id}`)
      .pipe(catchError(this.handlerError));
  }

  handlerError(error): Observable<never> {
    let errorMessage = 'Error unknown';
    if (error) {
      errorMessage = `Error ::: ${error.message}`;
    }
    window.alert(errorMessage);   /// Devuelve un Error !
    return throwError(errorMessage);
  }

}
