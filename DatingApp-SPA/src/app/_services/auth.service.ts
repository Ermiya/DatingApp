import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { logging } from 'protractor';
import { map } from 'rxjs/operators';
import { stringify } from '@angular/core/src/util';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl = 'http://localhost:5000/api/auth/';

  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post(this.baseUrl + 'login', model).pipe(
      map((response: any) => {
        const user = response;
        if ( user ) {
          localStorage.setItem('token', user.token);
        }
      })
    );
  }

register(model: any) {

  console.log(this.baseUrl + 'register');
  return this.http.post(this.baseUrl + 'register', model);
}

}