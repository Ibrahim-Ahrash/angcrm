import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConfServService } from '../config/conf-serv.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient,
    private config: ConfServService
  ) { }


  LogInToSystem(LogInObject: any): Observable<any> {

    return this.http.post(`${this.config.getAPILink()}/api/Users/Login`, LogInObject);
  }

  getToken() {

    return localStorage.getItem("Token");
  }
}
