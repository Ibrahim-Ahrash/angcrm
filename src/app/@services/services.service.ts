import { ConfServService } from './config/conf-serv.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
    private conf: ConfServService
  ) { }

  getServicesList(ServiceFilter: any): Observable<any> {
    return this.http.post(`${this.conf.getAPILink()}/api/Services/Requests/Get`, ServiceFilter)

  }

  GetProducts() {

    return this.http.get(`${this.conf.getAPILink()}/api/CRMBackOffice/Products/Get`)

  }

  getServiceDetails(ServiceRequestID_PK: any): Observable<any> {

    return this.http.get(`${this.conf.getAPILink()}/api/Services/Requests/Get/${ServiceRequestID_PK}`)
  }
}

