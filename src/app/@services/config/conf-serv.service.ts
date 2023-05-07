import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfServService {

  private appCofig: any;

  API_IP: string = "http://135.181.133.173:2023/v1"
  constructor(private http: HttpClient) { }

  LoadConfigrations() {

    return this.http.get("../../../assets/config.json")
      .toPromise()
      .then(
        res => {

          this.appCofig = res;
        }
      );

  }

  getAPILink() {

    return this.API_IP;
  }

}
