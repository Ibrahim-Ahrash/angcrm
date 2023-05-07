import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { ConfServService } from './config/conf-serv.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor(
    private auth: ConfServService,
    private http: HttpClient
  ) { }


  getActivities(): Observable<any> {
    return this.http.get(`${this.auth.getAPILink()}/api/CRMBackOffice/Activities/Get`)
  }

  getCities(): Observable<any> {
    return this.http.get(`${this.auth.getAPILink()}/api/CRMBackOffice/Cities/Get`);
  }

  getSystemModuls(): Observable<any> {

    return this.http.get(`${this.auth.getAPILink()}/api/CRMBackOffice/RefSystemModule/Get`)

  }

  GetProducts(): Observable<any> {

    return this.http.get(`${this.auth.getAPILink()}/api/CRMBackOffice/Products/Get`)
  }
}
