import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, User } from '@shared/components/interfaces/user.interface.ts'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public url = "/www/angular/";
  
  constructor(private http: HttpClient) { }
  
  login(user: Login){
    console.log(user);
    return this.http.post(`${this.url}index.php`, user);
  }
}

