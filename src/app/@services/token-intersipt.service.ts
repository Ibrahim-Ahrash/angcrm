import { HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth/auth.service';
import { Observable, finalize } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenIntersiptService {

  constructor(
    private auth: AuthService
  ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    let newRequst = req.clone({
      setHeaders: {
        "Authorization": `Bearer ${this.auth.getToken()}`,
        'Content-Type': 'application/json'
      },
    });

    return next.handle(newRequst).pipe(
      finalize(() => {

      })
    );
  }
}
